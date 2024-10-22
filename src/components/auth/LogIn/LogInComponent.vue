<template>
    <div class="container">
        <!-- Left: Image -->
        <div class="l-container">
            <!-- img -->
            <h1>Logo Orizonta</h1>
        </div>
        <!-- Right: Login Form -->
        <div class="r-container">
            <h1 class="r-title">Login</h1>
            <form @submit.prevent="onLogin" class="r-form">
                <!-- Username Input -->
                <div class="r-input">
                    <label for="email">Correo</label>
                    <input 
                    v-model="myForm.mail"
                    ref="emailInputRef"
            
                    id="email" 
                    name="email"
                    >
                    
                </div>
                <!-- Password Input -->
                <div class="r-input">
                    <label for="password">Contraseña</label>
                    <input 
                    v-model="myForm.password" 
                    ref="passwordInputRef"
                    type="password" 
                    id="password" 
                    name="password">
                </div>
                <!-- Remember Me Checkbox -->
                <div class="r-checkbox">

                    <input v-model="myForm.remember" type="checkbox" id="remember" name="remember">
                    <label for="remember">Recordar usuario</label>
                </div>
                <!-- Forgot Password Link -->
                <div class="r-forgot">
                    <a href="#">¿Olvidaste tu contraseña?</a>
                </div>
                <!-- Login Button -->
                <div class="btn-container">
                    <button type="submit" class="btn">Login</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from './stores/auth.store';
import { useToast } from 'vue-toastification';

const authStore = useAuthStore();
const emailInputRef = ref<HTMLInputElement|null>(null);
const passwordInputRef = ref<HTMLInputElement | null>(null);
const toast = useToast();

const myForm = reactive({
    mail: '',
    password: '',
    remember: false,
});



const onLogin = async () => {
    if (!myForm.mail || !myForm.password) {
        toast.error('Por favor, rellene todos los campos');
        return emailInputRef.value?.focus();
    }

    if (!myForm.mail.includes('@') || !myForm.mail.includes('.')) {
        toast.error('Por favor, introduzca un correo válido');
        return emailInputRef.value?.focus();
    }

    if (myForm.remember) {
        localStorage.setItem('mail', myForm.mail);
    } else {
        localStorage.removeItem('mail');
    }

    const ok = await authStore.login(myForm.mail, myForm.password);

    if (ok) return;

    toast.error('Credenciales incorrectas');
};

watchEffect(() => {
    const mail = localStorage.getItem('mail');
    if (mail) {
        myForm.mail = mail;
        myForm.remember = true;
    }
});

</script>

<style lang="scss" scoped>
@import "../../../styles/pages/logIn.scss";
</style>