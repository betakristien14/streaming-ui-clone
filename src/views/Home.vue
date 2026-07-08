<template>
  <div>
    <Navbar />
    <HeroBanner />

    <div class="movies">
      <h2>Daftar Film</h2>

      <div v-if="movies.length" class="movie-grid">
        <MovieCard
        v-for="movie in movies"
        :key="movie.id"
        :movie="movie"
        />
      </div>

      <p v-else>Loading...</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

import Navbar from "@/components/Navbar.vue";
import HeroBanner from "@/components/HeroBanner.vue";
import MovieCard from "@/components/MovieCard.vue";

import { getMovies } from "@/services/movieService";

const movies = ref([]);

onMounted(async () => {
  movies.value = await getMovies();
});
</script>

<style scoped>
.movies {
  padding: 40px 60px;
  color: white;
}

.movies h2 {
  margin-bottom: 20px;
}

.movie-grid {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}
</style>
