<template>
    <form class="form-container">
        <CommonForm />
        <div class="inputs">
            <label for="consoleType">Tipo:</label>
            <select v-model="selectedConsoleType" id="consoleType">
                <option v-for="(console, index) in consoleType" :key="index">{{ console.label }}</option>
            </select>
        </div>
        <div class="inputs">
            <label for="channels">Cantidad de canales:</label>
            <input v-model="selectedChannels" type="number">
        </div>
        <button class="btn">Agregar artículo</button>
    </form>
</template>

<script setup lang="ts">

import { useCategoryStore } from '@/stores/categoryStore';
import { ref } from 'vue';
import CommonForm from '../CommonForm.vue';


const { consoleType } = useCategoryStore().audioCategories;

const selectedConsoleType = ref('');
const selectedChannels = ref('');


</script>