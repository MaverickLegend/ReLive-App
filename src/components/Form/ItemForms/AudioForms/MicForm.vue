<template>
    <form class="form-container" @submit.prevent>
        <CommonForm :modelValue="model" :brandValue="brand" :quantityValue="quantity" @update:model="updateModel"
            @update:brand="updateBrand" @update:quantity="updateQuantity" />
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
        <button class="btn" @click="handleAddArticle">Agregar artículo</button>
    </form>
</template>

<script setup lang="ts">
import { useCategoryStore } from '@/stores/categoryStore';
import { ref } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import CommonForm from '../CommonForm.vue';
import { addArticle } from '../../useAddArticle';
import { AudioMic } from '@/models/article.class';

const { micType, polarPattern } = useCategoryStore().audioCategories;

const selectedMicType = ref<string>('');
const selectedPolarPattern = ref<string>('');
const model = ref<string>('');
const brand = ref<string>('');
const quantity = ref<number>(0);

const updateModel = (value: string) => {
    model.value = value;
};

const updateBrand = (value: string) => {
    brand.value = value;
};

const updateQuantity = (value: number) => {
    quantity.value = value;
};

const handleAddArticle = async () => {
    const newArticle = new AudioMic(
        uuidv4(),
        model.value,
        brand.value,
        quantity.value,
        'Audio', // category
        'Microphone', // audioType
        selectedMicType.value,
        selectedPolarPattern.value
    );
    await addArticle(newArticle);
    console.log(newArticle);

    // Reset form values
    model.value = '';
    brand.value = '';
    quantity.value = 0;
    selectedMicType.value = '';
    selectedPolarPattern.value = '';
};

</script>