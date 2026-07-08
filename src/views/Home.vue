<template>
  <div>
    <Navbar />

    <HeroBanner
      v-if="movies.length"
      :movies="movies"
    />

    <SearchBar @search="handleSearch" />

    <!-- Filter Kategori -->
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
    </div>

    <div class="movies">
      <h2>Daftar Film</h2>

      <div v-if="movies.length">

        <!-- Search / Filter -->
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
        </template>

      </div>

      <LoadingSpinner v-else />
    </div>

    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

import Navbar from "@/components/Navbar.vue";
import HeroBanner from "@/components/HeroBanner.vue";
import MovieRow from "@/components/MovieRow.vue";
import SearchBar from "@/components/SearchBar.vue";
import Footer from "@/components/Footer.vue";
import LoadingSpinner from "@/components/LoadingSpinner.vue";

import { getMovies } from "@/services/movieService";

const movies = ref([]);

const trendingMovies = ref([]);
const popularMovies = ref([]);
const filteredMovies = ref([]);

const selectedCategory = ref("Semua");

onMounted(async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  movies.value = await getMovies();

  trendingMovies.value = movies.value.filter(
    (movie) => movie.category === "Trending"
  );

  popularMovies.value = movies.value.filter(
    (movie) => movie.category === "Popular"
  );
});

const handleSearch = (keyword) => {
  const text = keyword.toLowerCase();

  filteredMovies.value = movies.value.filter((movie) =>
    movie.title.toLowerCase().includes(text)
  );
};

const filterCategory = (category) => {
  selectedCategory.value = category;

  if (category === "Semua") {
    trendingMovies.value = movies.value.filter(
      (movie) => movie.category === "Trending"
    );

    popularMovies.value = movies.value.filter(
      (movie) => movie.category === "Popular"
    );

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
