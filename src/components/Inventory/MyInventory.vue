<template>
    <div class="container">
        <nav class="nav">
            <router-link to="/inventory/add-article" class="btn nav-item">Agregar artículo</router-link>
            <router-link to="/inventory/generate-checklist" class="btn mav-item">Generar checklist</router-link>
            <router-link to="/inventory/print-selection" class="btn nav-item">Imprimir selección</router-link>
        </nav>
        <h1>Inventario</h1>
        <div class="grid-container">
            <div class="grid-item" v-for="(article, index) in articles" :key="index">
                <h1>{{ article.model }}</h1>
                <h3>{{ article.brand }}</h3>
                <span>Stock: {{ article.quantity }}</span>
                <span>Categoría: {{ article.category }}</span>
                <button class="btn">Detalles</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { db } from '@/firebase';
import { collection, getDocs } from 'firebase/firestore';
import type { Item } from '@/types/interfaces';

const articles = ref<Item[]>([]);

const fetchInventory = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, 'articles'));
        articles.value = querySnapshot.docs.map(doc => doc.data()) as Item[];
    }
    catch (error) {
        console.error('Error al obtener artículos:', error);
    };
};

onMounted(() => {
    fetchInventory();
});

</script>

<style scoped lang="scss">
@import '../../styles/pages/myInventory.scss'
</style>
