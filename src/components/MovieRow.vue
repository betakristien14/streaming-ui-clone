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
  font-size: 20px;
  font-weight: bold;
}

.row {
  display: flex;
  gap: 20px;
  overflow-x: auto;
  padding-bottom: 10px;

  scroll-behavior: smooth;
}

.row::-webkit-scrollbar {
  display: none;
}

.row {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
