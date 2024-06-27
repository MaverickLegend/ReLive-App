<template>
    <div class="container">
        <h1 for="category">Seleccione una categoría</h1>
        <div v-if="selectedMainCategory === ''" class="categories">
            <button @click="selectMainCategory(category.id)" class="categories-item" v-for="category in categoriesArray"
                :key="category.name">{{ category.name }}
            </button>
        </div>
        <div style="width: 100%;" v-else>
            <component :is="currentComponent" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import AudioForm from './ItemForms/AudioForm.vue';
import EnergyForm from './ItemForms/EnergyForm.vue';
import LightningForm from './ItemForms//LightningForm.vue';
// import VideoForm from './VideoForm.vue';
// import StructureForm from './StructureForm.vue';
// import CableForm from './CableForm.vue';

const categoriesArray = [
    {
        id: 'audio',
        name: 'Audio',
        component: AudioForm,
    },
    {
        id: 'energy',
        name: 'Energía',
        component: EnergyForm,
    },
    {
        id: 'lighting',
        name: 'Iluminación',
        component: LightningForm,
    },
    {
        id: 'video',
        name: 'Video',
        component: 'VideoForm',
    },
    {
        id: 'structure',
        name: 'Estructura',
        component: 'StructureForm',
    },
    {
        id: 'cable',
        name: 'Cables',
        component: 'CableForm',
    },
];

const selectedMainCategory = ref('');

const selectMainCategory = (categoryId: string) => {
    selectedMainCategory.value = categoryId;
};

const currentComponent = computed(() => {
    const category = categoriesArray.find(cat => cat.id === selectedMainCategory.value);
    return category ? category.component : null;
});


</script>

<style lang="scss">
@import '../../styles/pages/_formComponent.scss'
</style>