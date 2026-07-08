<template>
  <div class="my-list">
    <h1>❤️ My List</h1>

    <div v-if="favorites.length" class="movie-grid">
      <MovieCard
        v-for="movie in favorites"
        :key="movie.id"
        :movie="movie"
      />
    </div>

    <p v-else>Belum ada film favorit.</p>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useMyListStore } from "@/stores/myList";
import MovieCard from "@/components/MovieCard.vue";

const myListStore = useMyListStore();

const { favorites } = storeToRefs(myListStore);
</script>

<style scoped>
.my-list {
  padding: 100px 60px;
  color: white;
}

.movie-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
</style>
