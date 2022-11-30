<template>
    <button btn rounded-xl border-2 border-red-900 flex flex-col items-center justify-center space-y-3 text-red-900 font-bold uppercase p-4 :class="isActive(props.label) ? 'active' : ''" type="button" @click="setNewDiet(props.label)">
        <span>{{ props.label }}</span>

        <div :class="props.icon" w-6 h-6 text-amber />
    </button>
</template>

<script lang="ts" setup>
    const props = defineProps<{
        label: string
        icon: string
    }>();

    const { selectedDiet } = useDiet();

    const setNewDiet = (label: string) => {
        selectedDiet.value = label;
    };

    const isActive = (label: string) => {
        return label === selectedDiet.value;
    }
</script>

<style scoped>
    [btn][active]{
        @apply bg-red-900 text-amber;
    }
</style>
