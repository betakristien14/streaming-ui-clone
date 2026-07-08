<template>
  <div>
    <Navbar />
    <HeroBanner />

    <SearchBar @search="handleSearch" />

    <div class="movies">
      <h2>Daftar Film</h2>

      <div v-if="movies.length">

        <!-- Hasil Pencarian -->
        <MovieRow
          v-if="filteredMovies.length"
          title="🔍 Hasil Pencarian"
          :movies="filteredMovies"
        />

        <!-- Trending & Popular -->
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

      <p v-else>Loading...</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

import Navbar from "@/components/Navbar.vue";
import HeroBanner from "@/components/HeroBanner.vue";
import MovieRow from "@/components/MovieRow.vue";
import SearchBar from "@/components/SearchBar.vue";

import { getMovies } from "@/services/movieService";

const movies = ref([]);
const trendingMovies = ref([]);
const popularMovies = ref([]);
const filteredMovies = ref([]);

onMounted(async () => {
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
</script>

<style scoped>
.movies {
  padding: 40px 60px;
  color: white;
}

.movies h2 {
  margin-bottom: 20px;
}
</style>
