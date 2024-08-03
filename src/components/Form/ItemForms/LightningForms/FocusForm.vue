<template>
    <form class="form-container" @submit.prevent>
        <CommonForm :modelValue="model" :brandValue="brand" :quantityValue="quantity" @update:model="updateModel"
            @update:brand="updateBrand" @update:quantity="updateQuantity" />
        <div class="inputs">
            <label for="focusType">Tipo de foco</label>
            <select v-model="selectedBulbType" id="focusType">
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
            <label for="consumption">Amperaje</label>
            <input type="number" v-model="selectedAmperage" id="consumption" placeholder="Amperes">
        </div>
        <div class="inputs">
            <label for="power">Potencia</label>
            <input type="number" v-model="selectedWattage" id="power" placeholder="Watts">
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
import CommonForm from '../CommonForm.vue';
import { addArticle } from '../../useAddArticle';
import { LightningBulb } from '@/models/article.class';

const categoryStore = useCategoryStore().lightingCategories;
const { focusType, energyType, energyConnection } = categoryStore;

const model = ref<string>('');
const brand = ref<string>('');
const quantity = ref<number>(0);
const selectedBulbType = ref<string>('');
const selectedFocusType = ref<string>('');
const selectedAmperage = ref<number>(0);
const selectedWattage = ref<number>(0);
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
        model.value,
        brand.value,
        quantity.value,
        'Lightning',
        'Focus',
        selectedBulbType.value,
        selectedFocusType.value,
        selectedAmperage.value,
        selectedWattage.value,
        selectedEnergyConnection.value
    );
    await addArticle('light', newArticle);
    console.log(newArticle);

    // Reset form values
    model.value = '';
    brand.value = '';
    quantity.value = 0;
    selectedBulbType.value = '';
    selectedFocusType.value = '';
    selectedAmperage.value = 0;
    selectedWattage.value = 0;
    selectedEnergyConnection.value = '';
};


</script>

<style scoped lang="scss">
@import '../../../../styles/components/_forms.scss'
</style>