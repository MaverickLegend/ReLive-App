<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
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
        </div>
      </nav>
    </header>
    <aside class="sidebar">
      <RouterLink to="/inventory">Inventario</RouterLink>
      <RouterLink to="/bodega">Bodega</RouterLink>
      <h4>Trabajadores</h4>
      <h4>Cotización</h4>
    </aside>
    <RouterView class="main" />
  </div>
</template>

<style scoped lang="scss">
@import '../styles/layout/grid.scss';
@import '../styles/layout/header.scss';
@import '../styles/layout/sidebar.scss';
</style>
