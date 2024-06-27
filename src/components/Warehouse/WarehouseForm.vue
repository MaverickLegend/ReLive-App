<template>
    <div class="modal">
        <div class="modal-content">
            <span class="close" @click="$emit('close')">X</span>
            <form class="form-container" @submit.prevent>
                <div class="inputs">
                    <label for="sku">SKU</label>
                    <input v-model="sku" type="text" id="sku">
                </div>
                <div class="inputs">
                    <label for="name">Nombre:</label>
                    <input v-model="name" type="text" id="name">
                </div>
                <div class="inputs">
                    <label for="category">Categoría:</label>
                    <select v-model="category" id="category">
                        <option v-for="(categoryOp, index) in categoryOptions" :key="index">{{ categoryOp.label }}
                        </option>
                    </select>
                </div>
                <div class="inputs">
                    <label for="dateReceived">Fecha de recepción:</label>
                    <input v-model="dateReceived" type="date" id="dateReceived">
                </div>
                <div class="inputs">
                    <label for="urgency">Urgencia:</label>
                    <select v-model="urgency" id="urgency">
                        <option v-for="(urgencyOp, index) in urgencyOptions" :key="index">{{ urgencyOp.label }}</option>
                    </select>
                </div>
                <div class="inputs">
                    <label for="description">Descripción:</label>
                    <textarea v-model="description" id="description"></textarea>
                </div>
                <div class="inputs">
                    <label for="state">Estado:</label>
                    <select v-model="state" id="state">
                        <option v-for="(stateOp, index) in stateOptions" :key="index">{{ stateOp.label }}</option>
                    </select>
                </div>
                <button class="btn" @click="addItem">Agregar artículo</button>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { WarehouseArticle } from '../../models/warehouseItem.class';
import { addWarehouseItem } from './useAddItemToWarehouse';
import { v4 as uuidv4 } from 'uuid';
import { ref } from 'vue';

const urgencyOptions = [
    { value: 'low', label: 'Baja' },
    { value: 'medium', label: 'Media' },
    { value: 'high', label: 'Alta' }
];

const categoryOptions = [
    { value: 'audio', label: 'Audio' },
    { value: 'video', label: 'Video' },
    { value: 'lightning', label: 'Iluminación' },
    { value: 'energy', label: 'Energía' },
    { value: 'other', label: 'Otro' }
];

const stateOptions = [
    { value: 'usable', label: 'Funcional' },
    { value: 'almostUsable', label: 'Medianamente funcional' },
    { value: 'unusable', label: 'No funcional' }
];

const sku = ref<number>(0);
const name = ref<string>('');
const description = ref<string>('');
const category = ref<string>('');
const dateReceived = ref<Date>(new Date());
const state = ref<string>('');
const urgency = ref<string>('');


const addItem = async () => {
    const newItem = new WarehouseArticle(
        uuidv4(),
        sku.value,
        name.value,
        description.value,
        category.value,
        dateReceived.value,
        state.value,
        urgency.value,
    );
    await addWarehouseItem(newItem);
    console.log(newItem);
}


</script>

<style scoped lang="scss">
@import '../../styles/components/_modal.scss';
</style>