<template>
    <form class="form-container" @submit.prevent>
        <CommonForm :modelValue="model" :brandValue="brand" :quantityValue="quantity" @update:model="updateModel"
            @update:brand="updateBrand" @update:quantity="updateQuantity" />
        <div class="inputs">
            <label for="speakerType">Tipo:</label>
            <select v-model="selectedSpeakerType" id="speakerType">
                <option v-for="(speaker, index) in speakerType" :key="index">{{ speaker.label }}</option>
            </select>
        </div>
        <div class="inputs">
            <label>Tamaño:</label>
            <input v-model="selectedSize" type="number" placeholder="Pulgadas">
        </div>
        <div class="inputs">
            <label for="power">Potencia:</label>
            <input v-model="selectedPower" type="number" placeholder="Watts">
        </div>
        <div class="inputs">
            <label for="energyConnection">Conexión de energía:</label>
            <select v-model="selectedEnergyConnection">
                <option v-for="(connection, index) in connectionType" :key="index">{{ connection.label }}</option>
            </select>
        </div>
        <div class="inputs">
            <label for="audioConnection">Conexión de audio:</label>
            <select v-model="selectedAudioConnection">
                <option v-for="(connection, index) in connectionType" :key="index">{{ connection.label }}</option>
            </select>
        </div>
        <button class="btn" @click="handleAddArticle">Agregar artículo</button>
    </form>
</template>

<script setup lang="ts">
import { useCategoryStore } from '@/stores/categoryStore';
import { ref } from 'vue';
import CommonForm from '../CommonForm.vue';
import { AudioSpeaker } from '@/models/article.class';
import { addArticle } from '../../useAddArticle';


const { speakerType, connectionType } = useCategoryStore().audioCategories;
const selectedSpeakerType = ref<string>('');
const selectedSize = ref<number>(0);
const selectedPower = ref<number>(0);
const selectedEnergyConnection = ref<string>('');
const selectedAudioConnection = ref<string>('');
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
    const newArticle = new AudioSpeaker(
        model.value,
        brand.value,
        quantity.value,
        'Audio', // category
        'Speaker', // audioType
        selectedSpeakerType.value,
        selectedSize.value,
        selectedPower.value,
        selectedEnergyConnection.value,
        selectedAudioConnection.value
    );
    await addArticle('speaker', newArticle);
    console.log(newArticle);

    // Reset form values
    model.value = '';
    brand.value = '';
    quantity.value = 0;
    selectedSpeakerType.value = '';
    selectedSize.value = 0;
    selectedPower.value = 0;
    selectedEnergyConnection.value = '';
    selectedAudioConnection.value = '';
};

</script>

<style scoped lang="scss">
@import '../../../../styles/components/_forms.scss'
</style>