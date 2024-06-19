<template>
    <div class="container">
        <div v-if="selectedCategory === ''" class="categories">
            <button class="categories-item" v-for="(category, index) in energyCategories.category" :key="index"
                @click="selectCategory(category.value)"> {{
                    category.label }}
            </button>
        </div>
        <div v-else>
            <component :is="currentComponent" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useCategoryStore } from '@/stores/categoryStore';
import BoardForm from './EnergyForms/BoardForm.vue';
import GeneratorForm from './EnergyForms/GeneratorForm.vue';
import OthersForm from './EnergyForms/OthersForm.vue';

const categoryStore = useCategoryStore();
const { energyCategories } = categoryStore;
const selectedCategory = ref('');

const selectCategory = (categoryValue: string) => {
    selectedCategory.value = categoryValue;
};

const currentComponent = computed(() => {
    switch (selectedCategory.value) {
        case 'Board':
            return BoardForm;
        case 'Generator':
            return GeneratorForm;
        case 'Others':
            return OthersForm;
        default:
            return null;
    }
});

</script>