<template>
  <div class="register-page">
    <div class="register-card">

      <h1>StreamFlix</h1>
      <p>Buat akun baru</p>

      <form @submit.prevent="handleRegister">

        <input
          v-model="name"
          type="text"
          placeholder="Nama Lengkap"
        />

        <input
          v-model="email"
          type="email"
          placeholder="Email"
        />

        <input
          v-model="password"
          type="password"
          placeholder="Password"
        />

        <button>
          Daftar
        </button>

      </form>

      <RouterLink to="/login">
        Sudah punya akun?
      </RouterLink>

    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter, RouterLink } from "vue-router";

import { register } from "@/services/authService";

const router = useRouter();

const name = ref("");
const email = ref("");
const password = ref("");

const handleRegister = async () => {

  const newUser = {
    name: name.value,
    email: email.value,
    password: password.value,
    role: "user",
  };

  await register(newUser);

  alert("Registrasi berhasil");

  router.push("/login");
};
</script>

<style scoped>
.register-page{
  min-height:100vh;
  display:flex;
  justify-content:center;
  align-items:center;
  background:#111;
}

.register-card{
  width:400px;
  background:#181818;
  padding:40px;
  border-radius:12px;
}

h1{
  color:#E50914;
  margin-bottom:10px;
}

p{
  color:#ccc;
  margin-bottom:30px;
}

input{
  width:100%;
  padding:14px;
  margin-bottom:15px;
  border:none;
  border-radius:6px;
}

button{
  width:100%;
  padding:15px;
  border:none;
  border-radius:6px;
  background:#E50914;
  color:white;
  cursor:pointer;
}

a{
  display:block;
  margin-top:20px;
  text-align:center;
  color:#ccc;
}
</style>
