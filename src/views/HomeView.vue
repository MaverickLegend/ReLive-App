<script setup lang="ts">
import { useAuthStore } from '@/components/auth/stores/auth.store';
import { RouterLink, RouterView } from 'vue-router'
import { useToast } from 'vue-toastification';
import { useRouter } from 'vue-router';


const authStore = useAuthStore();
const router = useRouter();
console.log(authStore.user);

const toast = useToast();
const handleLogout = () => {
  authStore.logout();
  router.push({ name: 'login' });
  toast.success('Sesión cerrada');
}

</script>

<template>
  <div class="main-app">
    <header>
      <nav class="nav">
        <div class="nav-logo">
          <h1>Orizonta</h1>
          <h1>Bienvenid@ {{ authStore.user?.fullName }}</h1>
          <img src="" alt="">
        </div>
        <div class="nav-links">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <template v-if="authStore.isAdmin">
            <RouterLink to="/admin">Admin</RouterLink>
            <RouterLink to="/register">Register</RouterLink>
          </template>
          <template v-if="authStore.isAuthenticated">
            <button @click="handleLogout">Cerrar Sesión</button>
          </template>
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
