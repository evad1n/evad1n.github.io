<template>
    <v-app>
        <Nuxt />
    </v-app>
</template>

<script>
import p5 from '~/static/js/p5.min.js';

export default {
    data() {
        return {};
    },
    methods: {
        flocking(num) {
            new p5((p) => {
                p.setup = function () {
                    document.querySelector('canvas').remove();
                    let c = p.createCanvas(p.windowWidth, document.body.offsetHeight);
                    c.parent(document.body);

                    p.stroke(255);

                    p.flock = new Flock(p.color(100));
                    for (let i = 0; i < num; i++) {
                        p.flock.addFlocker(createFlocker());
                    }
                };

                p.windowResized = function () {
                    p.resizeCanvas(p.windowWidth, document.body.offsetHeight);
                };

                p.draw = function () {
                    p.clear();

                    p.flock.update();
                };

                function createFlocker(
                    x = p.random(p.width),
                    y = p.random(window.scrollY, p.windowHeight + window.scrollY)
                ) {
                    return new Flocker(p.createVector(x, y), p5.Vector.random2D());
                }

                class Flock {
                    /**	p5.Color for fill color */
                    color;
                    /** The array of flockers belonging to this flock */
                    flockers;

                    constructor(color, type) {
                        this.color = color;
                        this.flockers = [];
                    }

                    update() {
                        for (const flocker of this.flockers) {
                            flocker.update(this.flockers, this.color);
                        }
                    }

                    addFlocker(flocker) {
                        this.flockers.push(flocker);
                    }
                }

                class Flocker {
                    // General constants
                    static MASS = 1;
                    static MAX_FORCE = 0.05;
                    static DEFAULT_SPEED = 3;

                    // Drawing constants
                    static RADIUS = 10;

                    // Weighting for forces
                    static FLOCK_DISTANCE = 110;

                    static ALIGN_WEIGHT = 1.0;
                    static COHESION_WEIGHT = 1.0;
                    static SEPARATION_WEIGHT = 1.5;
                    static SEPARATION_DISTANCE = 100;

                    // Member variables
                    /** p5.Vector Current position */
                    pos;
                    /** p5.Vector Current position */
                    dir;
                    /** p5.Vector Current velocity */
                    vel;
                    /** p5.Vector Current acceleration */
                    accel;
                    /** Max speed */
                    maxSpeed;

                    /**
                     * Set starting position and velocity
                     * @param {p5.Vector} pos Starting position vector
                     * @param {p5.Vector} vel Starting velocity vector
                     */
                    constructor(pos, vel, type) {
                        this.pos = pos;
                        this.vel = vel;
                        this.dir = vel;
                        this.accel = p.createVector(0, 0);
                        this.maxSpeed = Flocker.DEFAULT_SPEED;
                    }

                    draw(color) {
                        // Fill color
                        p.fill(color);
                        // Outline color
                        p.stroke(0);
                        // Outline width
                        p.strokeWeight(0.5);

                        // Facing direction
                        let angle = this.vel.heading() - p.radians(90);

                        // Transforms
                        p.translate(this.pos.x, this.pos.y);
                        p.rotate(angle);
                        p.scale(2);
                        // Draw the flocker
                        p.beginShape();
                        p.vertex(0, (2 * Flocker.RADIUS) / 3);
                        p.vertex(-Flocker.RADIUS / 2, -Flocker.RADIUS / 2);
                        p.vertex(0, -Flocker.RADIUS / 10);
                        p.vertex(Flocker.RADIUS / 2, -Flocker.RADIUS / 2);
                        p.endShape(p.CLOSE);
                        p.resetMatrix();
                    }

                    update(flock, color) {
                        // this is where we control movement and interactivity
                        this.flock(flock);
                        this.updatePosition();
                        this.bounds();
                        this.draw(color);
                    }

                    updatePosition() {
                        // Add acceleration to velocity
                        this.vel.add(this.accel);
                        // Limit speed
                        this.vel.limit(this.maxSpeed);
                        // Add velocity to position
                        this.pos.add(this.vel);
                        // Reset acceleration
                        this.accel.mult(0);
                    }

                    /**
                     * Adds a force vector to current acceleration
                     * @param {p5.Vector} force The force vector to apply
                     */
                    applyForce(force) {
                        this.accel.add(p5.Vector.div(force, Flocker.MASS));
                    }

                    /**
                     * Steers towards the target
                     * @param {p5.Vector} target The vector position to seek
                     * @param {boolean} deccel Whether to deccelerate on approach
                     */
                    seek(target) {
                        let steer,
                            desired = p5.Vector.sub(target, this.pos),
                            d = desired.mag();
                        desired.setMag(this.maxSpeed);

                        steer = p5.Vector.sub(desired, this.vel);
                        steer.limit(Flocker.MAX_FORCE);
                        return steer;
                    }

                    /**
                     * Wrap
                     */
                    bounds() {
                        let h = window.scrollY + p.windowHeight;
                        if (this.pos.x < -Flocker.RADIUS) this.pos.x = p.width + Flocker.RADIUS;
                        if (this.pos.y < -Flocker.RADIUS + window.scrollY) this.pos.y = h + Flocker.RADIUS;
                        if (this.pos.x > p.width + Flocker.RADIUS) this.pos.x = -Flocker.RADIUS;
                        if (this.pos.y > h + Flocker.RADIUS) this.pos.y = -Flocker.RADIUS + window.scrollY;
                    }

                    /**
                     * Gets current flock in vicinity and calls flocking methods: align, separate, cohere
                     */
                    flock(flock) {
                        let nearby = [];
                        for (const other of flock) {
                            let d = this.pos.dist(other.pos);
                            if (d > 0 && d < Flocker.FLOCK_DISTANCE) {
                                nearby.push(other);
                            }
                        }

                        let alignment = this.align(nearby);
                        let separation = this.separate(nearby);
                        let cohesion = this.cohere(nearby);
                        // Apply weights
                        alignment.mult(Flocker.ALIGN_WEIGHT);
                        separation.mult(Flocker.SEPARATION_WEIGHT);
                        cohesion.mult(Flocker.COHESION_WEIGHT);
                        // Apply forces
                        this.applyForce(alignment);
                        this.applyForce(separation);
                        this.applyForce(cohesion);
                    }

                    /**
                     * Calculates alignment vector for flock
                     * @param {Flocker[]} flock
                     */
                    align(flock) {
                        let sum = flock.reduce((acc, other) => acc.add(other.vel), p.createVector());

                        if (flock.length > 0) {
                            sum.div(flock.length);
                            sum.setMag(this.maxSpeed);
                            let steer = p5.Vector.sub(sum, this.vel);
                            steer.limit(Flocker.MAX_FORCE);
                            return steer;
                        }
                        // Nothing to align to
                        return sum;
                    }

                    /**
                     * Calculates separation vector for flock
                     * @param {Flocker[]} flock
                     */
                    separate(flock) {
                        let steer = p.createVector(),
                            count = 0;

                        for (const other of flock) {
                            let d = this.pos.dist(other.pos);
                            if (d > 0 && d < Flocker.SEPARATION_DISTANCE) {
                                let diff = p5.Vector.sub(this.pos, other.pos);
                                diff.normalize();
                                diff.div(d);
                                steer.add(diff);
                                count++;
                            }
                        }

                        if (count > 0) {
                            steer.div(count);
                        }

                        if (steer.mag() > 0) {
                            // Don't just call seek(steer) as the steer vector already takes into account the desired location
                            steer.setMag(this.maxSpeed);
                            steer.sub(this.vel);
                            steer.limit(Flocker.MAX_FORCE);
                        }
                        return steer;
                    }

                    /**
                     * Calculates cohesion vector for flock
                     * @param {Flocker[]} flock
                     */
                    cohere(flock) {
                        let center = flock.reduce((acc, other) => acc.add(other.pos), p.createVector());

                        // Average to find center and then seek
                        if (flock.length > 0) {
                            center.div(flock.length);
                            return this.seek(center);
                        }
                        // Nothing to cohere to
                        return center;
                    }
                }
            });
        }
    },
    mounted() {
        this.flocking(screen.width / 100);
    }
};
</script>

<style lang="scss">
@import '~assets/variables.scss';

html {
    font-family: 'Courier New', Courier, monospace;
    background-color: #c4ec96;
}

canvas {
    position: absolute;
    top: 0;
    z-index: -1;
}

.v-application {
    background-color: rgba($color: #000000, $alpha: 0) !important;
}
</style>