import { defineStore } from "pinia";

export const useMyListStore = defineStore("myList", {
  state: () => ({
    favorites: JSON.parse(localStorage.getItem("favorites")) || [],
  }),

  actions: {
    addMovie(movie) {
      const exists = this.favorites.find(
        (item) => item.id === movie.id
      );

      if (!exists) {
        this.favorites.push(movie);
        this.saveFavorites();
      }
    },

    removeMovie(id) {
      this.favorites = this.favorites.filter(
        (movie) => movie.id !== id
      );

      this.saveFavorites();
    },

    saveFavorites() {
      localStorage.setItem(
        "favorites",
        JSON.stringify(this.favorites)
      );
    },
  },
});
