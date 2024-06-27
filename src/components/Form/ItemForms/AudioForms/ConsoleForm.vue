<template>
    <form class="form-container" @submit.prevent>
        <CommonForm :modelValue="model" :brandValue="brand" :quantityValue="quantity" @update:model="updateModel"
            @update:brand="updateBrand" @update:quantity="updateQuantity" />
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
        <button class="btn" @click="handleAddArticle">Agregar artículo</button>
    </form>
</template>

<script setup lang="ts">

import { useCategoryStore } from '@/stores/categoryStore';
import { ref } from 'vue';
import CommonForm from '../CommonForm.vue';
import { v4 as uuidv4 } from 'uuid';
import { AudioConsole } from '@/models/article.class';
import { addArticle } from '../../useAddArticle';


const { consoleType } = useCategoryStore().audioCategories;

const selectedConsoleType = ref('');
const selectedChannels = ref(0);
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
    const newArticle = new AudioConsole(
        uuidv4(),
        model.value,
        brand.value,
        quantity.value,
        'Audio', // category
        'Console', // audioType
        selectedConsoleType.value,
        selectedChannels.value
    );
    await addArticle(newArticle);
    console.log(newArticle);

    model.value = '';
    brand.value = '';
    quantity.value = 0;
    selectedConsoleType.value = '';
    selectedChannels.value = 0;
};

</script>

<style scoped lang="scss">
@import '../../../../styles/components/_forms.scss'
</style>