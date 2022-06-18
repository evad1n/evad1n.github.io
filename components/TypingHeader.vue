<template>
    <h1 ref="el"></h1>
</template>

<script setup lang="ts">
const { text, speed } = defineProps({
    text: {
        type: String,
        default: "Hello",
    },
    speed: {
        type: Number,
        default: 100,
    },
});

const emit = defineEmits(["completed"]);

const i = ref(0);

const el = ref(null);

const typer = () => {
    if (i.value < text.length) {
        el.value.innerHTML += text.charAt(i.value);
        i.value++;
        setTimeout(typer, speed);
    } else {
        emit("completed");
    }
};

onMounted(() => {
    typer();
});
</script>

<style lang="scss" scoped></style>
