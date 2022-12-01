<template>
    <div fixed inset-x-0 bottom-3 text-center>
        <p text-light-50 space-x-2>
            <span>v{{ version }} - Made with</span>
            <i-fa-solid-heart text-red-600 w-5 h-5 />
            <span>
                by
                <a href="https://github.com/NicolaSpadari"  underline inline target="_blank">
                    Nicola Spadari
                </a>
            </span>
        </p>
    </div>
</template>

<script lang="ts" setup>
    import { version } from "../../package.json";
</script>
