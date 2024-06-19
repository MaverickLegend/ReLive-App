<template>
    <div class="container">
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
import type { DocumentData } from 'firebase/firestore';


const articles = ref<DocumentData[]>([]);

const fetchInventory = async () => {
    const querySnapshot = await getDocs(collection(db, 'articles'));
    querySnapshot.forEach((doc) => {
        return articles.value.push(doc.data());
    });
}

onMounted(() => {
    fetchInventory();
});
</script>

<style scoped lang="scss">
@import '@/styles/pages/myInventory.scss';
</style>
