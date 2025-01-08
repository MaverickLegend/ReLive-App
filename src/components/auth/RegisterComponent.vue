<template>
    <div>
        <div class="form-container">
            <form @submit.prevent="onRegister">
                <div class="input-container">
                    <input
                        type="text"
                        v-model="myForm.fullName"
                        ref="fullNameInputRef"
                        placeholder="Nombre completo"
                    />
                </div>
                <div class="input-container">
                    <input
                        type="email"
                        v-model="myForm.email"
                        ref="emailInputRef"
                        placeholder="Correo electrónico"
                    />
                </div>
                <div class="input-container">
                    <input
                        type="password"
                        v-model="myForm.password"
                        ref="passwordInputRef"
                        placeholder="Contraseña"
                    />
                </div>
                <div class="input-container">
                    <select v-model="myForm.roles" multiple>
                        <option value="user">Usuario</option>
                        <option value="admin">Administrador</option>
                    </select>
                </div>
                <div class="btn-container">
                    <button type="submit" class="btn">Registrarse</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref} from 'vue';
import { useAuthStore } from './stores/auth.store';
import { useToast } from 'vue-toastification';
import { Roles } from './interfaces/roles.interface';

const authStore = useAuthStore();
const fullNameInputRef = ref<HTMLInputElement | null>(null);
const emailInputRef = ref<HTMLInputElement | null>(null);
const passwordInputRef = ref<HTMLInputElement | null>(null);
const rolesInputRef = ref<HTMLSelectElement | null>(null);
const toast = useToast();

const myForm = reactive({
    fullName: '',
    email: '',
    password: '',
    roles: [] as Roles[],
});

const onRegister = async () => {
    if (myForm.fullName.length < 3) {
        toast.error('Por favor, rellene todos los campos');
        return fullNameInputRef.value?.focus();
    }

    if (!myForm.email || !myForm.password) {
        toast.error('Por favor, rellene todos los campos');
        return emailInputRef.value?.focus();
    }

    if (!myForm.email.includes('@') || !myForm.email.includes('.')) {
        toast.error('Por favor, introduzca un correo válido');
        return emailInputRef.value?.focus();
    }

    if (!myForm.roles.length) {
        toast.error('Por favor, seleccione al menos un rol');
        return rolesInputRef.value?.focus();
    }

    try {
        const normalizeForm = {
            ...myForm,
            roles: [...myForm.roles]
        }
        console.log(normalizeForm);
        const ok = await authStore.register(normalizeForm.fullName, normalizeForm.email, normalizeForm.password, normalizeForm.roles);
        if (ok) return 'ok'
            toast.success('Usuario registrado correctamente');
        ;
    }
    catch (error) {
        console.log(error);
        toast.error('Error al registrar usuario');
    }
};

</script>

<style scoped lang="scss"></style>