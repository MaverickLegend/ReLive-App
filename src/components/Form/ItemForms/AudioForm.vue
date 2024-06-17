<template>
    <div class="container">
        <div v-if="selectedCategory === ''" class="categories">
            <button class="categories-item" v-for="(category, index) in audioCategories.audioTypeCat" :key="index"
                @click="selectCategory(category.value)"> {{
                    category.label }}
            </button>
        </div>
        <div v-else>
            <div class="inputs">
                <label>Modelo:</label>
                <input v-model="selectedModel" type="text">
            </div>
            <div class="inputs">
                <label>Marca:</label>
                <input v-model="selectedBrand" type="text">
            </div>
            <div class="inputs">
                <label>Cantidad:</label>
                <input v-model="selectedQuantity" type="number">
            </div>
            <component :is="currentComponent" :id="id" :selectedCategory="selectedCategory"
                :selectedModel="selectedModel" :selectedBrand="selectedBrand" :selectedQuantity="selectedQuantity" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { useCategoryStore } from '@/stores/categoryStore';
import { AudioArticle } from '@/models/article.class';
import { ref, computed } from 'vue';
import MicForm from './AudioForms/MicForm.vue';
import SpeakerForm from './AudioForms/SpeakerForm.vue';
import ConsoleForm from './AudioForms/ConsoleForm.vue';
import OthersForm from './AudioForms/OthersForm.vue';


const categoryStore = useCategoryStore();
const { audioCategories } = categoryStore;
console.log(audioCategories);
const id = ref(0);
const selectedCategory = ref('');
const selectedModel = ref('');
const selectedBrand = ref('');
const selectedQuantity = ref(0);

const selectCategory = (categoryValue: string) => {
    selectedCategory.value = categoryValue;
};

const currentComponent = computed(() => {
    switch (selectedCategory.value) {
        case 'Microphone':
            return MicForm;
        case 'Speaker':
            return SpeakerForm;
        case 'Console':
            return ConsoleForm;
        case 'Others':
            return OthersForm;
        default:
            return null;
    }
});


</script>

<style scoped></style>