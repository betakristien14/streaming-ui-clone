<template>
  <div class="my-list">
    <h1>❤️ My List</h1>

    <!-- Jika ada film favorit -->
    <div v-if="favorites.length" class="movie-grid">
      <div
        v-for="movie in favorites"
        :key="movie.id"
        class="movie-item"
      >
        <MovieCard :movie="movie" />

        <button
          class="remove-btn"
          @click="removeMovie(movie.id)"
        >
          🗑 Remove
        </button>
      </div>
    </div>

    <!-- Jika belum ada film -->
    <EmptyState
      v-else
      icon="❤️"
      title="Belum ada film favorit"
      message="Tambahkan film favorit dari halaman Home."
    />
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useMyListStore } from "@/stores/myList";

import MovieCard from "@/components/MovieCard.vue";
import EmptyState from "@/components/EmptyState.vue";

const myListStore = useMyListStore();

const { favorites } = storeToRefs(myListStore);

const removeMovie = (id) => {
  myListStore.removeMovie(id);
};
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

.movie-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.remove-btn {
  width: 100%;
  margin-top: 10px;

  padding: 10px;

  border: none;
  border-radius: 6px;

  background: #e50914;
  color: white;

  cursor: pointer;
  transition: all 0.3s ease;
}

.remove-btn:hover {
  background: #b20710;
}
</style>
