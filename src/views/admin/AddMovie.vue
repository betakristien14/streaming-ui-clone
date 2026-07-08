<template>
  <div class="container">
    <h1>➕ Tambah Film</h1>

    <form @submit.prevent="saveMovie">

      <input
        v-model="movie.title"
        placeholder="Judul Film"
        required
      />

      <input
        v-model="movie.category"
        placeholder="Kategori"
        required
      />

      <input
        type="text"
        v-model="movie.year"
        placeholder="Contoh: 2025"
        maxlength="4"
        required
      />

      <input
        type="number"
        step="0.1"
        v-model="movie.rating"
        placeholder="Rating"
        required
      />

      <input
        v-model="movie.image"
        placeholder="URL Poster"
        required
      />

      <input
        v-model="movie.trailer"
        placeholder="URL Trailer YouTube"
      />

      <textarea
        v-model="movie.description"
        placeholder="Deskripsi"
      ></textarea>

      <button>
        Simpan Film
      </button>

    </form>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

const router = useRouter();

const movie = reactive({
  title: "",
  category: "",
  year: "",
  rating: "",
  image: "",
  trailer: "",
  description: "",
});

const saveMovie = async () => {
  await axios.post(
    "http://localhost:3000/movies",
    movie
  );

  alert("Film berhasil ditambahkan!");

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

    resize:none;

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
