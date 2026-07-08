<template>
  <div class="admin">

    <h1>🎬 Dashboard Admin</h1>

    <p>Selamat datang, {{ user?.name }}</p>

    <div class="cards">

      <div class="card">
        <h2>Total Film</h2>
        <span>{{ totalMovies }}</span>
      </div>

      <div class="card">
        <h2>Total User</h2>
        <span>{{ totalUsers }}</span>
      </div>

    </div>

    <div class="actions">

      <RouterLink
        to="/admin/movies"
        class="btn"
      >
        Kelola Film
      </RouterLink>

    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { RouterLink } from "vue-router";
import { useAuthStore } from "@/stores/authStore";
import axios from "axios";

const authStore = useAuthStore();

const user = authStore.user;

const totalMovies = ref(0);
const totalUsers = ref(0);

onMounted(async () => {

  const movies = await axios.get("http://localhost:3000/movies");
  const users = await axios.get("http://localhost:3000/users");

  totalMovies.value = movies.data.length;
  totalUsers.value = users.data.length;

});
</script>

<style scoped>
.admin{
    padding:100px 60px;
    color:white;
}

.cards{
    display:flex;
    gap:20px;
    margin:40px 0;
}

.card{
    width:220px;
    padding:30px;
    border-radius:12px;
    background:#1d1d1d;
}

.card h2{
    margin-bottom:15px;
}

.card span{
    font-size:40px;
    color:#E50914;
}

.btn{

    display:inline-block;

    padding:15px 25px;

    background:#E50914;

    color:white;

    text-decoration:none;

    border-radius:8px;

}
</style>
