<template>
    <div>
        <div class="inputs">
            <label for="speakerType">Tipo:</label>
            <select v-model="selectedSpeakerType" id="speakerType">
                <option v-for="(speaker, index) in speakerType" :key="index">{{ speaker.label }}</option>
            </select>
        </div>
        <div class="inputs">
            <label for="power">Potencia:</label>
            <input v-model="selectedPower" type="number">
        </div>
        <div class="inputs">
            <label for="impedance">Tamaño:</label>
            <input v-model="selectedSize" type="number">
        </div>
        <button class="btn">Agregar artículo</button>
    </div>
</template>

<script setup lang="ts">
import { useCategoryStore } from '@/stores/categoryStore';
import { AudioArticle } from '@/models/article.class';

defineProps({
    selectedCategory: String,
    selectedModel: String,
    selectedBrand: String,
    selectedQuantity: Number,
});

const { speakerType } = useCategoryStore().audioCategories;
const selectedSpeakerType = '';
const selectedPower = '';
const selectedSize = '';



</script>