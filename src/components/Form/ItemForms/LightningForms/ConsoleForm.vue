<template>
    <form class="form-container">
        <CommonForm />
        <div class="inputs">
            <label for="consoleType">Cantidad de universos</label>
            <input type="number" v-model="consoleType" id="consoleType">
        </div>
    </form>
</template>

<script setup lang="ts">
import CommonForm from '../CommonForm.vue';
import { ref } from 'vue';
import { LightingArticle } from '@/models/article.class';

const consoleType = ref(0);

</script>