<template>
    <div class="inputs">
        <label>Modelo:</label>
        <input v-model="model" @input="updateModel" id="model" type="text">
    </div>
    <div class="inputs">
        <label>Marca:</label>
        <input v-model="brand" @input="updateBrand" id="brand" type="text">
    </div>
    <div class="inputs">
        <label>Cantidad:</label>
        <input v-model="quantity" @input="updateQuantity" id="quantity" type="number" min="1" max="100">
    </div>
</template>

<script setup lang="ts">

import { ref, defineEmits, defineProps, watch } from 'vue';

const props = defineProps({
    modelValue: String,
    brandValue: String,
    quantityValue: Number,
});

const emit = defineEmits(['update:model', 'update:brand', 'update:quantity']);

const model = ref(props.modelValue);
const brand = ref(props.brandValue);
const quantity = ref(props.quantityValue);

watch(() => props.modelValue, (newValue) => {
    model.value = newValue;
});

watch(() => props.brandValue, (newValue) => {
    brand.value = newValue;
});

watch(() => props.quantityValue, (newValue) => {
    quantity.value = newValue;
});

const updateModel = () => emit('update:model', model.value);
const updateBrand = () => emit('update:brand', brand.value);
const updateQuantity = () => emit('update:quantity', quantity.value);

</script>

<style scoped lang="scss">
@import '../../../styles/components/_forms.scss'
</style>