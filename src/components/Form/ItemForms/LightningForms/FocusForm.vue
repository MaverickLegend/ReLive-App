<template>
    <form class="form-container">
        <CommonForm />
        <div class="inputs">
            <label for="focusType">Tipo de foco:</label>
            <select v-model="selectedFocusType" id="focusType">
                <option v-for="focus in focusType" :key="focus.value">{{ focus.label }}</option>
            </select>
        </div>
        <div class="inputs">
            <label for="energyType">Tipo de iluminación:</label>
            <select v-model="selectedEnergyType" id=energyType>
                <option v-for="energy in energyType" :key="energy.value">{{ energy.label }}</option>
            </select>
        </div>
        <div class="inputs">
            <label for="energyConnection">Conexión de energía:</label>
            <select v-model="selectedEnergyConnection" id="energyConnection">
                <option v-for="connection in energyConnection" :key="connection.value">{{ connection.label }}</option>
            </select>
        </div>
    </form>
</template>

<script setup lang="ts">
import { useCategoryStore } from '@/stores/categoryStore';
import { ref } from 'vue';
import { LightingArticle } from '@/models/article.class';
import CommonForm from '../CommonForm.vue';

const categoryStore = useCategoryStore().lightingCategories;
const { focusType, energyType, energyConnection } = categoryStore;

const selectedFocusType = ref('');
const selectedEnergyType = ref('');
const selectedEnergyConnection = ref('');

</script>