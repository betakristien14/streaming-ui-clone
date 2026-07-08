<template>
  <div>
    <!-- Navbar -->
    <Navbar @search="handleSearch" />

    <!-- Hero Banner -->
    <HeroBanner
      v-if="heroMovies.length"
      :movies="heroMovies"
    />

    <!-- Filter -->
    <div class="filter-buttons">
      <button
        :class="{ active: selectedCategory === 'Semua' }"
        @click="filterCategory('Semua')"
      >
        Semua
      </button>

      <button
        :class="{ active: selectedCategory === 'Trending' }"
        @click="filterCategory('Trending')"
      >
        Trending
      </button>

      <button
        :class="{ active: selectedCategory === 'Popular' }"
        @click="filterCategory('Popular')"
      >
        Popular
      </button>

      <button
        :class="{ active: selectedCategory === 'New Release' }"
        @click="filterCategory('New Release')"
      >
        New Release
      </button>

      <button
        :class="{ active: selectedCategory === 'Top Rated' }"
        @click="filterCategory('Top Rated')"
      >
        Top Rated
      </button>

      <button
        :class="{ active: selectedCategory === 'Horror' }"
        @click="filterCategory('Horror')"
      >
        Horror
      </button>

      <button
        :class="{ active: selectedCategory === 'Comedy' }"
        @click="filterCategory('Comedy')"
      >
        Comedy
      </button>
    </div>

    <!-- Movies -->
    <div class="movies">
      <h2>Daftar Film</h2>

      <!-- Hasil Search -->
      <MovieRow
        v-if="filteredMovies.length"
        :title="
          selectedCategory === 'Semua'
            ? '🔍 Hasil Pencarian'
            : '🎬 ' + selectedCategory
        "
        :movies="filteredMovies"
      />

      <!-- Default -->
      <template v-else>
        <MovieRow
          title="🔥 Trending"
          :movies="trendingMovies"
        />

        <MovieRow
          title="⭐ Popular"
          :movies="popularMovies"
        />

        <MovieRow
          title="🆕 New Release"
          :movies="newReleaseMovies"
        />

        <MovieRow
          title="🏆 Top Rated"
          :movies="topRatedMovies"
        />

        <MovieRow
          title="👻 Horror"
          :movies="horrorMovies"
        />

        <MovieRow
          title="😂 Comedy"
          :movies="comedyMovies"
        />
      </template>
    </div>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

import Navbar from "@/components/Navbar.vue";
import HeroBanner from "@/components/HeroBanner.vue";
import MovieRow from "@/components/MovieRow.vue";
import Footer from "@/components/Footer.vue";

import { getMovies } from "@/services/movieService";

const movies = ref([]);

const trendingMovies = ref([]);
const popularMovies = ref([]);
const newReleaseMovies = ref([]);
const topRatedMovies = ref([]);
const horrorMovies = ref([]);
const comedyMovies = ref([]);

const heroMovies = ref([]);

const filteredMovies = ref([]);

const selectedCategory = ref("Semua");

onMounted(async () => {
  movies.value = await getMovies();

  trendingMovies.value = movies.value.filter(
    (movie) => movie.category === "Trending"
  );

  popularMovies.value = movies.value.filter(
    (movie) => movie.category === "Popular"
  );

  newReleaseMovies.value = movies.value.filter(
    (movie) => movie.category === "New Release"
  );

  topRatedMovies.value = movies.value.filter(
    (movie) => movie.category === "Top Rated"
  );

  horrorMovies.value = movies.value.filter(
    (movie) => movie.category === "Horror"
  );

  comedyMovies.value = movies.value.filter(
    (movie) => movie.category === "Comedy"
  );

  heroMovies.value = [
    trendingMovies.value[0],
    popularMovies.value[0],
    newReleaseMovies.value[0],
    topRatedMovies.value[0],
    horrorMovies.value[0],
    comedyMovies.value[0],
  ].filter(Boolean);
});

const handleSearch = (keyword) => {
  selectedCategory.value = "Semua";

  const text = keyword.trim().toLowerCase();

  if (!text) {
    filteredMovies.value = [];
    return;
  }

  filteredMovies.value = movies.value.filter((movie) =>
    movie.title.toLowerCase().includes(text)
  );
};

const filterCategory = (category) => {
  selectedCategory.value = category;

  if (category === "Semua") {
    filteredMovies.value = [];
    return;
  }

  filteredMovies.value = movies.value.filter(
    (movie) => movie.category === category
  );
};
</script>

<style scoped>
.movies {
  padding: 40px 60px;
  color: white;
}

.movies h2 {
  margin-bottom: 20px;
}

.filter-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  padding: 20px 60px;
}

.filter-buttons button {
  background: #222;
  color: white;
  border: none;
  padding: 10px 18px;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-buttons button:hover {
  background: #e50914;
}

.filter-buttons button.active {
  background: #e50914;
}
</style>
