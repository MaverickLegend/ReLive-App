<template>
    <div class="container">
        <nav class="nav">
            <button class="btn" @click="showForm = true">Agregar artículo a reparación</button>
            <button class="btn" @click="handleMoveItemToRepaired" :disabled="!selectedItemId">Mover artículo a
                reparados</button>
        </nav>
        <WarehouseForm v-if="showForm" @close="showForm = false" />
        <h1>Reparación</h1>
        <div class="grid-container">
            <div class="grid-item" v-for="(item, index) in warehouseItem" :key="index">
                <h1>{{ item.name }}</h1>
                <h3>{{ item.dateReceived }}</h3>
                <h3>{{ item.urgency }}</h3>
                <button class="btn">Detalles</button>
                <button class="btn" @click="selectItem(item.id)">Seleccionar</button>
            </div>
        </div>
        <div v-if="selectedItemId">
            <h2>Artículo seleccionado para mover:</h2>
            <p>ID: {{ selectedItemId }}</p>
            <label for="dateRepaired">Fecha de reparación:</label>
            <input v-model="dateRepaired" type="date" id="dateRepaired">
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { db } from '@/firebase';
import { collection, getDocs } from 'firebase/firestore';
import type { WarehouseItem } from '@/types/warehouse';
import WarehouseForm from './WarehouseForm.vue';
import { moveItemToRepaired } from './useMoveToRepaired';

const warehouseItem = ref<WarehouseItem[]>([]);
const showForm = ref<boolean>(false);
const selectedItemId = ref<string>('');
const dateRepaired = ref<string>('');

const fetchItems = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, 'warehouseStore', 'O9pxOnIOlzzsKL9QtR6r', 'warehouse'));
        warehouseItem.value = querySnapshot.docs.map(doc => doc.data()) as WarehouseItem[];
    } catch (error) {
        console.error('Error al obtener items:', error);
    }
}

const selectItem = (itemId: string) => {
    selectedItemId.value = itemId;
}

const handleMoveItemToRepaired = async () => {
    if (!selectedItemId.value || !dateRepaired.value) return;

    const repairedDate = new Date(dateRepaired.value);

    try {
        await moveItemToRepaired(selectedItemId.value, repairedDate);
        // Actualiza la lista de artículos después de mover el artículo
        await fetchItems();
        selectedItemId.value = ''; // Limpiar el artículo seleccionado
        dateRepaired.value = ''; // Limpiar la fecha de reparación
    } catch (error) {
        console.error('Error moving item to repaired:', error);
    }
}

onMounted(() => {
    fetchItems();
});


</script>

<style scoped lang="scss">
@import '../../styles/pages/_myInventory.scss'
</style>