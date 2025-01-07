<template>
    <div class="container">
        <nav class="nav">
            <router-link to="/inventory/add-article" class="btn nav-item">Agregar artículo</router-link>
        </nav>
        <h1>Inventario</h1>
        <div class="grid-container">
            <!-- <div v-if="inventory.loading">Loading...</div>
            <div v-if="inventory.error">{{ inventory.error }}</div>
            <div v-if="!inventory.loading && !inventory.error"> -->
            <div class="grid-item" v-for="(item, index) in inventory.items" :key="index">
                <h1>{{ item.model }}</h1>
                <h3>{{ item.brand }}</h3>
                <span>Stock: {{ item.quantity }}</span>
                <span>Categoría: {{ item.category }}</span>
                <button class="btn" @click="handleItemDetails(item.id, item.itemType)">Detalles</button>
            </div>
            <div v-if="itemDetails">
                <pre>{{ itemDetails }}</pre>
            </div>
            <!-- </div> -->
        </div>
    </div>
</template>

<script setup lang="ts">


import { onMounted, ref } from 'vue';
import { useInventoryStore } from '@/stores/inventoryStore';

const inventory = useInventoryStore();
const itemDetails = ref<any>(null);


onMounted(() => {
    inventory.fetchInventory();
});

const handleItemDetails = async (id: string, itemType: string) => {
    const details = await inventory.fetchItemDetails(itemType, id);
    console.log('Item details:', details);
    itemDetails.value = details;

};

</script>

<style scoped lang="scss">
@import '../../styles/pages/myInventory'
</style>
