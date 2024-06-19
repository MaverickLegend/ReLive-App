<template>
    <form class="form-container">
        <CommonForm />
        <div class="inputs">
            <label for="speakerType">Tipo:</label>
            <select v-model="selectedSpeakerType" id="speakerType">
                <option v-for="(speaker, index) in speakerType" :key="index">{{ speaker.label }}</option>
            </select>
        </div>
        <div class="inputs">
            <label for="energyConnection">Conexión de energía:</label>
            <select v-model="selectedEnergyConnection">
                <option v-for="(connection, index) in connectionType" :key="index">{{ connection.label }}</option>
            </select>
        </div>
        <div class="inputs">
            <label for="power">Potencia:</label>
            <input v-model="selectedPower" type="number" placeholder="Watts">
        </div>
        <div class="inputs">
            <label for="impedance">Tamaño:</label>
            <input v-model="selectedSize" type="number" placeholder="Pulgadas">
        </div>
        <button class="btn">Agregar artículo</button>
    </form>
</template>

<script setup lang="ts">
import { useCategoryStore } from '@/stores/categoryStore';
import { AudioArticle } from '@/models/article.class';
import { ref } from 'vue';
import CommonForm from '../CommonForm.vue';


const { speakerType, connectionType } = useCategoryStore().audioCategories;
const selectedSpeakerType = '';
const selectedPower = '';
const selectedSize = '';
const selectedEnergyConnection = '';



</script>