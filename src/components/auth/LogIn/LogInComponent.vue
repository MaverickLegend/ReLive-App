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
            <form action="#" method="POST" class="r-form">
                <!-- Username Input -->
                <div class="r-input">
                    <label for="username">Username</label>
                    <input type="text" id="username" name="username">
                </div>
                <!-- Password Input -->
                <div class="r-input">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password">
                </div>
                <!-- Remember Me Checkbox -->
                <div class="r-checkbox">
                    <input type="checkbox" id="remember" name="remember">
                    <label for="remember">Remember Me</label>
                </div>
                <!-- Forgot Password Link -->
                <div class="r-forgot">
                    <a href="#">Forgot Password?</a>
                </div>
                <!-- Login Button -->
                <div class="btn-container">
                    <button type="button" class="btn" @click="onLogin">Login</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const onLogin = () => {
    sessionStorage.setItem('isAuthenticated', 'true');
    router.replace({
        name: 'Home',
    });
}

</script>

<style lang="scss" scoped>
@import "../../../styles/pages/logIn.scss";
</style>