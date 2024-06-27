<template>
    <form class="form-container">
        <CommonForm />
        <div class="inputs">
            <label for="otherDescription">Ingrese descripción</label>
            <textarea v-model="selectedOther" type="text" name="" id="otherDescription"></textarea>
        </div>
        <button class="btn">Agregar artículo</button>
    </form>
</template>

<script setup lang="ts">

import { ref } from 'vue';
import { AudioArticle } from '@/models/article.class';
import CommonForm from '../CommonForm.vue';


const selectedOther = ref('');

</script>

<style scoped lang="scss">
@import '../../../../styles/components/_forms.scss'
</style>