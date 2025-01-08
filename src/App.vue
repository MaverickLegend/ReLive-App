<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { AuthStatus } from './components/auth/interfaces/auth-status.enums';
import { useAuthStore } from './components/auth/stores/auth.store';


const authStore = useAuthStore();

const router = useRouter();
const route = useRoute();

authStore.$subscribe((_, state) => {
  if (state.authStatus === AuthStatus.Checking) { 
    authStore.checkAuthStatus();
    return;
  }

  if (route.path.includes('login') && state.authStatus === AuthStatus.Authenticated) {
    router.replace({ name: 'home' });
    return;
  }

  console.log(state.authStatus);
},
{
  immediate: true
}
);

</script>

<template>
  <div>
    <RouterView />
  </div>
</template>

<style scoped lang="scss"></style>