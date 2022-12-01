<template>
    <div grid place-content-center h-screen>
        <div crate>
            <div flex flex-col space-y-10>
                <div flex justify-center>
                    <div>
                        <button grow rounded-full space-x-2 px-10 bg-red-800 text-white font-black uppercase text-3xl lg="text-5xl" tracking-wide py-5 @click="getPizza()">
                            <span>Genera</span>
                            <i-fa-solid-plus text-white w-10 h-10 />
                        </button>
                    </div>
                </div>
                <div v-if="pizza !== ''">
                    <p bordered text-center text-2xl lg="text-4xl" text-amber font-bold font-heading text-capitalize>
                        Pizza {{ pizza }}
                    </p>
                </div>
                <div flex justify-center>
                    <div>
                        <button grow rounded-xl space-x-2 px-7 border-2 border-red-800 text-red-700 font-black uppercase text-lg lg="text-2xl" tracking-wide py-3 @click="visible = true;">
                            <span>Personalizza</span>
                            <i-fa-solid-pen text-red-700 w-6 h-6 />
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <Teleport to="body">
            <Modal :visible="visible" @close="visible = false" />
        </Teleport>
    </div>
</template>

<script lang="ts" setup>
    const { visible } = useModal();
    const { pizza, getPizza } = usePizza();
</script>

<style lang="scss" scoped>
    [grow]{
        @apply inline-flex items-center transition-transform duration-500 ease-in-out;

        &:hover{
            @apply scale-105;
        }
    }
</style>
