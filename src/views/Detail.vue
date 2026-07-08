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
        <button class="play">▶ Play</button>
        <button class="back" @click="goBack">← Kembali</button>
      </div>
    </div>
  </div>

  <div v-else class="loading">
    <h2>Loading...</h2>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getMovies } from "@/services/movieService";

const route = useRoute();
const router = useRouter();

const movie = ref(null);

onMounted(async () => {
  const movies = await getMovies();

  movie.value = movies.find(
    (item) => item.id == route.params.id
  );
});

const goBack = () => {
  router.push("/");
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
