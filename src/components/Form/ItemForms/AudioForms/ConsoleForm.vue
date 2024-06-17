<template>
    <div>
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
    </div>
</template>

<script setup lang="ts">

import { useCategoryStore } from '@/stores/categoryStore';
import type { Item } from '@/types/interfaces';
import { ref } from 'vue';

const props = defineProps<Item>();

const { consoleType } = useCategoryStore().audioCategories;

const selectedConsoleType = ref('');
const selectedChannels = ref('');


</script>