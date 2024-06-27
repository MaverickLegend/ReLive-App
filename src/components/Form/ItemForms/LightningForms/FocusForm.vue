<template>
    <form class="form-container" @submit.prevent>
        <CommonForm :modelValue="model" :brandValue="brand" :quantityValue="quantity" @update:model="updateModel"
            @update:brand="updateBrand" @update:quantity="updateQuantity" />
        <div class="inputs">
            <label for="focusType">Tipo de foco</label>
            <select v-model="selectedLightningType" id="focusType">
                <option v-for="focus in focusType" :key="focus.value">{{ focus.label }}</option>
            </select>
        </div>
        <div class="inputs">
            <label for="energyType">Tipo de iluminación</label>
            <select v-model="selectedFocusType" id=energyType>
                <option v-for="energy in energyType" :key="energy.value">{{ energy.label }}</option>
            </select>
        </div>
        <div class="inputs">
            <label for="consumption">Consumo</label>
            <input type="number" v-model="selectedConsumption" id="consumption" placeholder="Watts">
        </div>
        <div class="inputs">
            <label for="power">Potencia</label>
            <input type="number" v-model="selectedPower" id="power" placeholder="Watts">
        </div>
        <div class="inputs">
            <label for="energyConnection">Conexión de energía</label>
            <select v-model="selectedEnergyConnection" id="energyConnection">
                <option v-for="connection in energyConnection" :key="connection.value">{{ connection.label }}</option>
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
import { LightningBulb } from '@/models/article.class';

const categoryStore = useCategoryStore().lightingCategories;
const { focusType, energyType, energyConnection } = categoryStore;

const model = ref<string>('');
const brand = ref<string>('');
const quantity = ref<number>(0);
const selectedLightningType = ref<string>('');
const selectedFocusType = ref<string>('');
const selectedConsumption = ref<number>(0);
const selectedPower = ref<number>(0);
const selectedEnergyConnection = ref('');

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
    const newArticle = new LightningBulb(
        uuidv4(),
        model.value,
        brand.value,
        quantity.value,
        'Lightning',
        'Focus',
        selectedLightningType.value,
        selectedFocusType.value,
        selectedConsumption.value,
        selectedPower.value,
        selectedEnergyConnection.value
    );
    await addArticle(newArticle);
    console.log(newArticle);

    // Reset form values
    model.value = '';
    brand.value = '';
    quantity.value = 0;
    selectedLightningType.value = '';
    selectedFocusType.value = '';
    selectedConsumption.value = 0;
    selectedPower.value = 0;
    selectedEnergyConnection.value = '';
};


</script>

<style scoped lang="scss">
@import '../../../../styles/components/_forms.scss'
</style>