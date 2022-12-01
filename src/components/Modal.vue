<template>
    <div relative z-10 role="dialog">
        <Transition enter-active-class="ease-out duration-300" enter-from-class="opacity-0" enter-to-class="opacity-100" leave-active-class="ease-in duration-200" leave-from-class="opacity-100" leave-to-class="opacity-0">
            <div v-show="props.visible" fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity />
        </Transition>

        <div fixed inset-0 z-10 overflow-y-auto :class="{ 'pointer-events-none': !props.visible }">
            <div flex min-h-full justify-center p-4 items-center text-center sm="p-0">
                <Transition enter-active-class="ease-out duration-300" enter-from-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to-class="opacity-100 translate-y-0 sm:scale-100" leave-active-class="ease-in duration-200" leave-from-class="opacity-100 translate-y-0 sm:scale-100" leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                    <div v-show="props.visible" relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm="my-8 w-full max-w-3xl">
                        <div bg-dark-700 px-4 py-3 sm="px-6" text-right>
                            <button type="button" @click="emit('close')">
                                <i-heroicons-solid-x-circle text-red-900 w-10 h-10 />
                            </button>
                        </div>
                        <div bg-dark-500 space-y-20 px-4 pt-5 pb-4 sm="p-10">
                            <div space-y-3>
                                <p bordered text-center text-3xl lg="text-6xl" text-amber font-bold font-heading>
                                    Dieta
                                </p>
                                <div grid grid-cols-2 lg="grid-cols-4" gap-4>
                                    <button v-for="item in diet" :key="item.label" btn rounded-xl border-2 border-red-900 flex flex-col items-center justify-center space-y-3 text-red-900 font-bold uppercase p-4 :class="item.label === selectedDiet ? 'active' : ''" type="button" @click="selectedDiet = item.label; pizza = ''">
                                        <span>{{ item.label }}</span>

                                        <div :class="item.icon" w-6 h-6 text-amber />
                                    </button>
                                </div>
                            </div>
                            <div space-y-3>
                                <p bordered text-center text-3xl lg="text-6xl" text-amber font-bold font-heading>
                                    Escludi
                                </p>
                                <div grid grid-cols-2 lg="grid-cols-3" gap-4>
                                    <button v-for="item in exclude" :key="item.label" btn rounded-xl border-2 border-red-900 flex flex-col items-center justify-center space-y-3 text-red-900 font-bold uppercase p-4 :class="item.label === selectedExclusion ? 'active' : ''" type="button" @click="selectedExclusion = item.label; pizza = ''">
                                        <span>{{ item.label }}</span>

                                        <div :class="item.icon" w-6 h-6 text-amber />
                                    </button>
                                </div>
                            </div>
                            <div space-y-3>
                                <p bordered text-center text-3xl lg="text-6xl" text-amber font-bold font-heading>
                                    N° Ingredienti
                                </p>
                                <p v-if="(ingredientsNumber === 1)" text-center text-xl text-red-400 font-bold>
                                    Numero minimo raggiunto 🩻
                                </p>
                                <p v-if="(ingredientsNumber === 15)" text-center text-xl text-red-400 font-bold>
                                    Numero massimo raggiunto 🫄🏼
                                </p>
                                <div grid grid-cols-3 gap-4>
                                    <button btn rounded-xl border-2 border-red-900 flex flex-col items-center justify-center space-y-3 text-red-900 font-bold uppercase p-4 type="button" @click="handleIngredientsCount('less')">
                                        <i-fa-solid-minus w-6 h-6 text-amber />
                                    </button>
                                    <div flex items-center justify-center>
                                        <p bordered text-center text-3xl text-amber font-bold font-heading>
                                            {{ ingredientsNumber }}
                                        </p>
                                    </div>
                                    <button btn rounded-xl border-2 border-red-900 flex flex-col items-center justify-center space-y-3 text-red-900 font-bold uppercase p-4 type="button" @click="handleIngredientsCount('more')">
                                        <i-fa-solid-plus w-6 h-6 text-amber />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Transition>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    const props = defineProps<{
        visible: boolean
    }>();

    const emit = defineEmits(["close"]);

    const { diet, exclude, selectedDiet, selectedExclusion } = useDiet();
    const { ingredientsNumber, pizza } = usePizza();

    const handleIngredientsCount = (qty: string) => {
        if (qty === "less") {
            if (ingredientsNumber.value > 1) {
                ingredientsNumber.value--;
            }
        }
        if (qty === "more") {
            if (ingredientsNumber.value < 15) {
                ingredientsNumber.value++;
            }
        }

        pizza.value = "";
    };
</script>

<style scoped>
    [btn].active{
        @apply bg-red-900 text-amber;
    }
</style>
