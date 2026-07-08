<template>
  <div class="detail" v-if="movie">
    <img :src="movie.image" :alt="movie.title" />

    <div class="content">
      <h1>{{ movie.title }}</h1>

      <div class="meta">
        <span>⭐ {{ movie.rating }}</span>
        <span>📅 {{ movie.year }}</span>
        <span>🎬 {{ movie.category }}</span>
      </div>

      <p>{{ movie.description }}</p>

      <div class="buttons">
        <button
        class="play"
        @click="showTrailer = true"
      >
        ▶ Play
      </button>

        <button
          class="favorite"
          :class="{ added: isFavorite }"
          :disabled="isFavorite"
          @click="addToMyList"
        >
          {{ isFavorite ? "✅ Added" : "❤️ My List" }}
        </button>

        <button class="back" @click="goBack">
          ← Kembali
        </button>
      </div>
    </div>
  </div>

  <div v-else class="loading">
    <h2>Loading...</h2>
  </div>
  <TrailerModal
  v-if="movie"
  :show="showTrailer"
  :trailer="movie.trailer"
  @close="showTrailer = false"
/>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useRoute, useRouter } from "vue-router";

import { getMovies } from "@/services/movieService";
import { useMyListStore } from "@/stores/myList";
import TrailerModal from "@/components/TrailerModal.vue";

const route = useRoute();
const router = useRouter();

const myListStore = useMyListStore();
const isFavorite = computed(() => {
  return myListStore.favorites.some(
    (item) => item.id === movie.value?.id
  );
});

const movie = ref(null);
const showTrailer = ref(false);

onMounted(async () => {
  const movies = await getMovies();

  movie.value = movies.find(
    (item) => item.id == route.params.id
  );

  console.log(movie.value);
});

const goBack = () => {
  router.push("/");
};

const addToMyList = () => {
  myListStore.addMovie(movie.value);

  alert(`${movie.value.title} berhasil ditambahkan ke My List!`);
};
</script>

<style scoped>
.detail {
  display: flex;
  gap: 40px;
  padding: 100px 60px;
  color: white;
}

.detail img {
  width: 320px;
  border-radius: 10px;
  object-fit: cover;
}

.content {
  max-width: 700px;
}

.content h1 {
  font-size: 48px;
  margin-bottom: 20px;
}

.meta {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  color: #b3b3b3;
}

.content p {
  line-height: 1.8;
  margin-bottom: 30px;
}

.buttons {
  display: flex;
  gap: 20px;
}

.play {
  background: #e50914;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 6px;
  cursor: pointer;
}

.favorite {
  background: #444;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.favorite:hover {
  background: #e50914;
}
.favorite:disabled {
  background: #28a745;
  cursor: not-allowed;
}

.favorite.added {
  background: #28a745;
}

.back {
  background: transparent;
  color: white;
  border: 1px solid white;
  padding: 12px 24px;
  border-radius: 6px;
  cursor: pointer;
}

.loading {
  color: white;
  padding: 100px;
}
</style>
