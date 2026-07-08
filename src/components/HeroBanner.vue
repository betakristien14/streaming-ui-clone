<template>
  <section
    class="hero"
    :style="{ backgroundImage: `url(${movie.image || ''})` }"
  >
    <div class="overlay">
      <div class="content">
        <span class="tag">STREAMFLIX ORIGINAL</span>

        <h1>{{ movie.title }}</h1>

        <p>{{ movie.description }}</p>

        <div class="buttons">
          <button class="play">
            <i class="fas fa-play"></i>
            Play
          </button>

          <button class="info">
            <i class="fas fa-info-circle"></i>
            More Info
          </button>
        </div>

        <!-- Indikator Slide -->
        <div class="dots">
          <span
            v-for="(_, index) in props.movies"
            :key="index"
            :class="{ active: index === currentIndex }"
          ></span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from "vue";

const props = defineProps({
  movies: {
    type: Array,
    required: true,
  },
});

const currentIndex = ref(0);
const movie = ref({});

watch(
  () => props.movies,
  (newMovies) => {
    if (newMovies.length) {
      movie.value = newMovies[0];
    }
  },
  { immediate: true }
);

let interval = null;

onMounted(() => {
  interval = setInterval(() => {
    if (!props.movies.length) return;

    currentIndex.value =
      (currentIndex.value + 1) % props.movies.length;

    movie.value = props.movies[currentIndex.value];
  }, 5000);
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>

<style scoped lang="scss">
.hero {
  height: 80vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: background-image 0.8s ease;
}

.overlay {
  height: 100%;
  background: linear-gradient(
    rgba(0, 0, 0, 0.45),
    rgba(0, 0, 0, 0.9)
  );

  display: flex;
  align-items: center;
}

.content {
  margin-left: 80px;
  max-width: 600px;
  color: white;
}

.tag {
  color: #e50914;
  font-weight: bold;
}

h1 {
  font-size: 64px;
  margin: 15px 0;
}

p {
  line-height: 1.8;
  color: #ddd;
}

.buttons {
  display: flex;
  gap: 20px;
  margin-top: 30px;
}

button {
  padding: 15px 28px;
  border-radius: 6px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.play {
  background: white;
  color: black;
}

.info {
  background: rgba(255, 255, 255, 0.2);
  color: white;
}

.dots {
  display: flex;
  gap: 10px;
  margin-top: 30px;
}

.dots span {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.4);
  transition: 0.3s;
}

.dots .active {
  background: #e50914;
}
</style>
