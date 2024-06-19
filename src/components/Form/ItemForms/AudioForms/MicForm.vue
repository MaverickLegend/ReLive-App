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
        <button class="btn" @click="addArticle">Agregar artículo</button>
    </form>
</template>

<script setup lang="ts">
import { useCategoryStore } from '@/stores/categoryStore';
import { ref } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import CommonForm from '../CommonForm.vue';
import { AudioArticle } from '@/models/article.class';
import type { AudioItem } from '@/types/interfaces';
import { db } from '@/firebase';
import { collection, addDoc } from 'firebase/firestore';

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

const addArticle = async (): Promise<AudioItem> => {
    const newArticle = new AudioArticle(
        uuidv4(),
        model.value,
        brand.value,
        quantity.value,
        'Audio', // Tipo de artículo
        'Microphone',
        undefined, // diameter
        undefined, // power
        selectedPolarPattern.value, // polarPattern
        selectedMicType.value, // micType
        undefined, // speakerType
        undefined, // consoleType
        undefined, // channelQty
        undefined  // other
    );
    try {
        await addDoc(collection(db, 'articles'), {
            id: newArticle.id,
            model: newArticle.model,
            brand: newArticle.brand,
            quantity: newArticle.quantity,
            category: newArticle.category,
            audioType: newArticle.audioType,
            micType: newArticle.micType,
            polarPattern: newArticle.polarPattern
        });
        console.log('Document written with ID: ', newArticle.id);
    } catch (error) {
        console.error('Error adding document: ', error);
    }

    console.log(newArticle);
    model.value = '';
    brand.value = '';
    quantity.value = 0;
    selectedMicType.value = '';
    selectedPolarPattern.value = '';
    return newArticle
};

</script>