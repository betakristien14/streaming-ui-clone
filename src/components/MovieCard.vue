<template>
  <div class="movie-card">
    <img :src="movie.image" :alt="movie.title" />

    <div class="movie-info">
      <h3>{{ movie.title }}</h3>

      <div class="meta">
        <span>⭐ {{ movie.rating }}</span>
        <span>📅 {{ movie.year }}</span>
      </div>
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
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;

  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.movie-card:hover {
  transform: scale(1.08);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.6);
}

.movie-card img {
  width: 100%;
  height: 280px;
  object-fit: cover;

  transition: transform 0.3s ease;
}

.movie-card:hover img {
  transform: scale(1.05);
}

.movie-info {
  padding: 15px;
}

.movie-info h3 {
  font-size: 18px;
  margin-bottom: 10px;
  color: white;
}

.meta {
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 14px;
  color: #b3b3b3;
}

.meta span:first-child {
  color: gold;
}
</style>
