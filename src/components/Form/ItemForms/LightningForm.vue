<template>
    <div class="container">
        <div v-if="selectedCategory === ''" class="categories">
            <button class="categories-item" v-for="(category, index) in lightingCategories.category" :key="index"
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
import { useCategoryStore } from '@/stores/categoryStore';
import { ref, computed } from 'vue';
import FocusForm from './LightningForms/FocusForm.vue';
import ConsoleForm from './LightningForms/ConsoleForm.vue';
import OthersForm from './LightningForms/OthersForm.vue';

const categoryStore = useCategoryStore();
const { lightingCategories } = categoryStore;
const selectedCategory = ref('');

const selectCategory = (categoryValue: string) => {
    selectedCategory.value = categoryValue;
};

const currentComponent = computed(() => {
    switch (selectedCategory.value) {
        case 'Focus':
            return FocusForm;
        case 'Console':
            return ConsoleForm;
        case 'Others':
            return OthersForm;
        default:
            return null;
    }
});

</script>

<style scoped lang="scss">
@import '../../../styles/components/_forms.scss'
</style>