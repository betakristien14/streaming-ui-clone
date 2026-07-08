<template>
  <div class="movie-card">
    <img :src="movie.image" :alt="movie.title" />

    <div class="overlay">
      <div class="actions">
        <button class="play-btn">
          ▶
        </button>

        <RouterLink
          :to="`/movie/${movie.id}`"
          class="detail-btn"
        >
          ℹ
        </RouterLink>

        <button
          class="favorite-btn"
          @click.stop="addToMyList"
        >
          ❤️
        </button>
      </div>

      <div class="movie-info">
        <h3>{{ movie.title }}</h3>

        <div class="meta">
          <span>⭐ {{ movie.rating }}</span>
          <span>📅 {{ movie.year }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { useMyListStore } from "@/stores/myList";

const props = defineProps({
  movie: {
    type: Object,
    required: true,
  },
});

const myListStore = useMyListStore();

const addToMyList = () => {
  const exists = myListStore.favorites.some(
    (item) => item.id === props.movie.id
  );

  if (!exists) {
    myListStore.addMovie(props.movie);
  }
};
</script>

<style scoped lang="scss">
.movie-card {
  position: relative;
  width: 220px;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  transform-origin: center center;
  transition: all 0.35s ease;
}

.movie-card:hover {
  transform: scale(1.12) translateY(-12px);
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.65);
  z-index: 100;
}

.movie-card img {
  width: 100%;
  height: 320px;
  object-fit: cover;
  display: block;
  transition: transform 0.35s ease;
}

.movie-card:hover img {
  transform: scale(1.08);
}

.overlay {
  position: absolute;
  inset: 0;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  padding: 15px;

  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.95),
    rgba(0, 0, 0, 0.15)
  );

  opacity: 0;
  transform: translateY(20px);

  transition:
    opacity 0.35s ease,
    transform 0.35s ease;
}

.movie-card:hover .overlay {
  opacity: 1;
  transform: translateY(0);
}

.actions {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
}

.actions button,
.detail-btn {
  width: 40px;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 50%;

  cursor: pointer;
  font-size: 18px;

  text-decoration: none;

  transition: 0.3s;
}

.play-btn {
  background: white;
  color: black;
}

.detail-btn {
  background: rgba(255, 255, 255, 0.25);
  color: white;
}

.favorite-btn {
  background: #e50914;
  color: white;
}

.actions button:hover,
.detail-btn:hover {
  transform: scale(1.1);
}

.movie-info h3 {
  color: white;
  font-size: 18px;
  margin-bottom: 8px;
}

.meta {
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: #d1d1d1;
  font-size: 14px;
}
</style>

/* ===========================
   TABLET
=========================== */
@media (max-width: 992px) {
  .movie-card {
    width: 190px;
  }

  .movie-card img {
    height: 280px;
  }

  .movie-info h3 {
    font-size: 16px;
  }

  .meta {
    font-size: 13px;
  }
}

/* ===========================
   MOBILE
=========================== */
@media (max-width: 768px) {
  .movie-card {
    width: 160px;
  }

  .movie-card img {
    height: 240px;
  }

  .actions {
    gap: 8px;
  }

  .actions button,
  .detail-btn {
    width: 34px;
    height: 34px;
    font-size: 16px;
  }

  .movie-info h3 {
    font-size: 15px;
  }

  .meta {
    font-size: 12px;
  }
}

/* ===========================
   SMALL MOBILE
=========================== */
@media (max-width: 480px) {
  .movie-card {
    width: 140px;
  }

  .movie-card img {
    height: 210px;
  }

  .overlay {
    padding: 10px;
  }

  .movie-info h3 {
    font-size: 14px;
  }

  .meta {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    font-size: 11px;
  }
}
