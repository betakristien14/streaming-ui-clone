<template>
  <section class="movie-row">
    <h2>{{ title }}</h2>

    <div class="row">
      <MovieCard
        v-for="movie in movies"
        :key="movie.id"
        :movie="movie"
      />
    </div>
  </section>
</template>

<script setup>
import MovieCard from "./MovieCard.vue";

defineProps({
  title: String,
  movies: Array,
});
</script>

<style scoped>
.movie-row {
  margin: 50px 60px;
}

.movie-row h2 {
  color: white;
  margin-bottom: 20px;
}

.row {
  display: flex;
  gap: 20px;
  overflow-x: auto;
  padding-bottom: 10px;
}

.row::-webkit-scrollbar {
  height: 8px;
}

.row::-webkit-scrollbar-thumb {
  background: #555;
  border-radius: 10px;
}
</style>
