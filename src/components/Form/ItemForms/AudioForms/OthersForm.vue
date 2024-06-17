<template>
    <div>
        <div class="inputs">
            <label for="otherDescription">Ingrese descripción</label>
            <textarea v-model="selectedOther" type="text" name="" id="otherDescription"></textarea>
        </div>
        <button class="btn">Agregar artículo</button>
    </div>
</template>

<script setup lang="ts">

import type { Item } from '@/types/interfaces';
import { ref } from 'vue';
import { AudioArticle } from '@/models/article.class';

const props = defineProps<Item>();
const selectedOther = ref('');

</script>