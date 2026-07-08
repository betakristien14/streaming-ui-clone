<template>
  <div class="login-page">
    <div class="login-card">
      <h1>StreamFlix</h1>
      <p>Login ke akun Anda</p>

      <form @submit.prevent="handleLogin">
        <input
          v-model="email"
          type="email"
          placeholder="Email"
          required
        />

        <input
          v-model="password"
          type="password"
          placeholder="Password"
          required
        />

        <button type="submit">
          Login
        </button>
      </form>

      <RouterLink to="/register">
        Belum punya akun? Daftar
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink, useRouter } from "vue-router";

import { login } from "@/services/authService";
import { useAuthStore } from "@/stores/authStore";

const router = useRouter();
const authStore = useAuthStore();

const email = ref("");
const password = ref("");

const handleLogin = async () => {
  try {
    const user = await login(
      email.value.trim(),
      password.value
    );

    if (!user) {
      alert("Email atau Password salah!");
      return;
    }

    authStore.login(user);

    if (user.role === "admin") {
      router.push("/admin");
    } else {
      router.push("/");
    }

  } catch (error) {
    console.error(error);
    alert("Gagal terhubung ke server.");
  }
};
</script>

<style scoped>
.login-page {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #111;
}

.login-card {
  width: 400px;
  background: #181818;
  padding: 40px;
  border-radius: 12px;
}

h1 {
  color: #e50914;
  margin-bottom: 10px;
}

p {
  color: #ccc;
  margin-bottom: 30px;
}

input {
  width: 100%;
  padding: 14px;
  margin-bottom: 15px;
  border: none;
  border-radius: 6px;
  box-sizing: border-box;
}

button {
  width: 100%;
  padding: 15px;
  background: #e50914;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  background: #b20710;
}

a {
  display: block;
  margin-top: 20px;
  text-align: center;
  color: #ccc;
  text-decoration: none;
}

a:hover {
  color: white;
}
</style>
