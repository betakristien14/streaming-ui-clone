<template>
  <div class="admin-page">
    <h1>🎬 Kelola Film</h1>

    <RouterLink
      to="/admin/movie/add"
      class="add-btn"
    >
      + Tambah Film
    </RouterLink>

    <table>
      <thead>
        <tr>
          <th>Poster</th>
          <th>Judul</th>
          <th>Kategori</th>
          <th>Tahun</th>
          <th>Rating</th>
          <th>Aksi</th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="movie in movies"
          :key="movie.id"
        >
          <td>
            <img
              :src="movie.image"
              width="70"
            />
          </td>

          <td>{{ movie.title }}</td>
          <td>{{ movie.category }}</td>
          <td>{{ movie.year }}</td>
          <td>{{ movie.rating }}</td>

          <td>
            <RouterLink :to="`/admin/movie/edit/${movie.id}`">
              <button>Edit</button>
            </RouterLink>

            <button
              class="delete"
              @click="deleteMovie(movie.id)"
            >
              Hapus
            </button>
          </td>
        </tr>
      </tbody>

    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { RouterLink } from "vue-router";
import axios from "axios";

const movies = ref([]);

const loadMovies = async () => {
  const response = await axios.get("http://localhost:3000/movies");
  movies.value = response.data;
};

const deleteMovie = async (id) => {
  if (!confirm("Yakin ingin menghapus film?")) return;

  await axios.delete(`http://localhost:3000/movies/${id}`);

  loadMovies();
};

onMounted(() => {
  loadMovies();
});
</script>

<style scoped>
.admin-page {
  padding: 100px 60px;
  color: white;
}

.add-btn {
  display: inline-block;
  margin: 20px 0;
  background: #e50914;
  color: white;
  padding: 12px 20px;
  text-decoration: none;
  border-radius: 6px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  border-bottom: 1px solid #444;
  padding: 15px;
  text-align: left;
}

img {
  border-radius: 6px;
}

button {
  padding: 8px 15px;
  margin-right: 10px;
  cursor: pointer;
}

.delete {
  background: crimson;
  color: white;
}
</style>
