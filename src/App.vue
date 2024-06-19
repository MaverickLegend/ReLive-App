<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import './styles/main.scss'
</script>

<template>
  <div class="main-app">
    <header>
      <nav class="nav">
        <div class="nav-logo">
          <h1>Orizonta</h1>
          <img src="" alt="">
        </div>
        <div class="nav-links">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/inventory/add-article">Agregar artículo</RouterLink>
        </div>
      </nav>
    </header>
    <aside class="sidebar">
      <RouterLink to="/inventory">Inventario</RouterLink>
      <h4>Bodega</h4>
      <h4>Trabajadores</h4>
      <h4>Cotización</h4>
    </aside>
    <RouterView class="main" />
  </div>
</template>

<style scoped lang="scss">
@import './styles/layout/grid.scss';
@import './styles/layout/header.scss';
</style>
