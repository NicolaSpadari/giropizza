<template>
    <div class="wrapper" :class="props.direction">
        <slot />
    </div>
</template>

<script lang="ts" setup>
    const props = defineProps({
        direction: {
            type: String,
            required: false,
            default: "scroll-right"
        }
    });
</script>

<style>
    .wrapper p{
        @apply inline-block text-right -mb-full whitespace-nowrap;
    }
    .scroll-right p{
        animation: sliding-right 90s linear infinite;
    }
    .scroll-left p{
        animation: sliding-left 90s linear infinite;
    }

    @keyframes sliding-right {
        0% {
            transform: translateX(0)
        }

        to {
            transform: translateX(-50%)
        }
    }
    @keyframes sliding-left {
        0% {
            transform: translateX(-50%)
        }

        to {
            transform: translateX(0)
        }
    }
</style>
