export const cardProps = {
    title: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    mediaPath: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    tools: {
        type: Array,
        required: true,
    },
    reverse: {
        type: Boolean,
        default: () => false,
    },
};
