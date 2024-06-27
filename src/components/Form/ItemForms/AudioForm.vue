<template>
    <div class="container">
        <div v-if="selectedCategory === ''" class="categories">
            <button class="categories-item" v-for="(category, index) in audioCategories.audioTypeCat" :key="index"
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
import MicForm from './AudioForms/MicForm.vue';
import SpeakerForm from './AudioForms/SpeakerForm.vue';
import ConsoleForm from './AudioForms/ConsoleForm.vue';
import OthersForm from './AudioForms/OthersForm.vue';


const categoryStore = useCategoryStore();
const { audioCategories } = categoryStore;
const selectedCategory = ref('');

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
<style scoped lang="scss">
@import '../../../styles/components/_forms.scss'
</style>