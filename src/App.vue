<template>
    <Logo />

    <div fixed top-0 overflow-hidden space-y-2 mt-5>
        <ScrollingPhrase direction="scroll-left">
            <p text-9xl text-amber text-stroke-red-900 text-stroke-2 font-bold font-heading uppercase>
                <template v-for="n in times" :key="`pizza-${n}`">
                    Pizza&nbsp;
                </template>
            </p>
        </ScrollingPhrase>
        <ScrollingPhrase direction="scroll-right">
            <p text-6xl text-red-400 text-stroke-red-900 text-stroke-2 font-bold font-heading uppercase>
                <template v-for="n in times" :key="`generator-${n}`">
                    Generator&nbsp;
                </template>
            </p>
        </ScrollingPhrase>
    </div>

    <Generator />
</template>

<script lang="ts" setup>
    useHead({
        title: "Pizza generator"
    });

    const times = 20;
</script>

<style lang="scss">
    html {
        -webkit-tap-highlight-color: transparent;
        scroll-behavior: smooth;
    }
    body {
        @apply overflow-x-hidden font-sans bg-dark-600;
    }
    img {
        -webkit-user-drag: none;
        @apply select-none;
    }
    [bordered]{
        -webkit-text-stroke: 0.5px theme("colors.red.900");
    }
</style>
