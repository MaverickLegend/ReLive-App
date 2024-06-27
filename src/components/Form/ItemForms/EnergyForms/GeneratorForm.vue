<template>
    <form class="form-container">
        <CommonForm />
        <div class="inputs">
            <label for="amperage">Amperaje:</label>
            <select v-model="selectedAmperage" id="amperage">
                <option v-for="(amp, index) in amperage" :key="index">{{ amp.label }}</option>
            </select>
        </div>
        <div class="inputs">
            <label for="voltage">Voltaje:</label>
            <select v-model="selectedVoltage" id="voltage">
                <option v-for="(volt, index) in voltage" :key="index">{{ volt.label }}</option>
            </select>
        </div>
        <div class="inputs">
            <label for="takeType">Tipo de toma:</label>
            <select v-model="selectedTakeType" id="takeType">
                <option v-for="(take, index) in takeType" :key="index">{{ take.label }}</option>
            </select>
        </div>
        <button class="btn">Agregar artículo</button>
    </form>
</template>

<script setup lang="ts">
import { useCategoryStore } from '@/stores/categoryStore';
import { ref } from 'vue';
import CommonForm from '../CommonForm.vue';
import { EnergyArticle } from '@/models/article.class';

const { amperage, voltage, takeType } = useCategoryStore().energyCategories;
const selectedAmperage = ref('');
const selectedVoltage = ref('');
const selectedTakeType = ref('');


</script>

<style scoped lang="scss">
@import '../../../../styles/components/_forms.scss'
</style>