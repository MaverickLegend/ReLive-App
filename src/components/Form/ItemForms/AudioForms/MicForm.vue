<template>
    <div>
        <div class="inputs">
            <label for="micType">Tipo de micrófono:</label>
            <select v-model="selectedMicType" id="micType">
                <option v-for="(mic, index) in micType" :key="index">{{ mic.label }}</option>
            </select>
        </div>
        <div class="inputs">
            <label for="polarPattern">Patrón polar:</label>
            <select v-model="selectedPolarPattern" id="polarPattern">
                <option v-for="(pattern, index) in polarPattern" :key="index">{{ pattern.label }}</option>
            </select>
        </div>
        <button class="btn">Agregar artículo</button>
    </div>
</template>

<script setup lang="ts">
import { useCategoryStore } from '@/stores/categoryStore';
import { AudioArticle } from '@/models/article.class';
import type { Item } from '@/types/interfaces';

const props = defineProps<Item>();

const { micType, polarPattern } = useCategoryStore().audioCategories;
const selectedMicType = '';
const selectedPolarPattern = '';


</script>