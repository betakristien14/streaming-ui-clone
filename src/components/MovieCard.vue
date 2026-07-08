<template>
  <div class="movie-card">
    <img :src="movie.image" :alt="movie.title" />

    <div class="movie-info">
      <h3>{{ movie.title }}</h3>

      <p>{{ movie.year }}</p>

      <span>⭐ {{ movie.rating }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  movie: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.movie-card {
  width: 200px;
  background: #1f1f1f;
  border-radius: 10px;
  overflow: hidden;
  transition: 0.3s;
}

.movie-card:hover {
  transform: scale(1.05);
}

.movie-card img {
  width: 100%;
  height: 280px;
  object-fit: cover;
}

.movie-info {
  padding: 15px;
}

.movie-info h3 {
  font-size: 18px;
  margin-bottom: 8px;
}

.movie-info p {
  color: #b3b3b3;
  margin-bottom: 8px;
}

.movie-info span {
  color: gold;
}
</style>
