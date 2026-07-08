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
  font-size: 24px;
  font-weight: bold;
}

.row {
  display: flex;
  gap: 20px;
  overflow-x: auto;
  padding-bottom: 15px;

  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;

  -ms-overflow-style: none;
  scrollbar-width: none;
}

.row::-webkit-scrollbar {
  display: none;
}

.row > * {
  flex-shrink: 0;
  scroll-snap-align: start;
}

/* ===========================
   TABLET
=========================== */

@media (max-width: 992px) {
  .movie-row {
    margin: 40px 30px;
  }

  .movie-row h2 {
    font-size: 22px;
  }

  .row {
    gap: 18px;
  }
}

/* ===========================
   MOBILE
=========================== */

@media (max-width: 768px) {
  .movie-row {
    margin: 30px 20px;
  }

  .movie-row h2 {
    font-size: 20px;
    margin-bottom: 15px;
  }

  .row {
    gap: 15px;
  }
}

/* ===========================
   SMALL MOBILE
=========================== */

@media (max-width: 480px) {
  .movie-row {
    margin: 25px 15px;
  }

  .movie-row h2 {
    font-size: 18px;
  }

  .row {
    gap: 12px;
  }
}
</style>
