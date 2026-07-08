<template>
  <div class="container">
    <h1>✏️ Edit Film</h1>

    <form v-if="movie" @submit.prevent="updateMovie">

      <input
        v-model="movie.title"
        placeholder="Judul Film"
      />

      <input
        v-model="movie.category"
        placeholder="Kategori"
      />

      <input
        v-model="movie.year"
        placeholder="Tahun"
      />

      <input
        v-model="movie.rating"
        placeholder="Rating"
      />

      <input
        v-model="movie.image"
        placeholder="Poster"
      />

      <input
        v-model="movie.trailer"
        placeholder="Trailer"
      />

      <textarea
        v-model="movie.description"
      ></textarea>

      <button>
        Update Film
      </button>

    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";

const route = useRoute();
const router = useRouter();

const movie = ref(null);

onMounted(async () => {
  const response = await axios.get(
    `http://localhost:3000/movies/${route.params.id}`
  );

  movie.value = response.data;
});

const updateMovie = async () => {
  await axios.put(
    `http://localhost:3000/movies/${route.params.id}`,
    movie.value
  );

  alert("Film berhasil diperbarui!");

  router.push("/admin/movies");
};
</script>

<style scoped>
.container{
    padding:100px 60px;
    color:white;
}

form{
    max-width:700px;
}

input,
textarea{
    width:100%;
    padding:15px;
    margin-bottom:18px;
    border:none;
    border-radius:8px;
    box-sizing:border-box;
}

textarea{
    height:140px;
}

button{
    background:#E50914;
    color:white;
    border:none;
    padding:15px 30px;
    border-radius:8px;
    cursor:pointer;
}
</style>
