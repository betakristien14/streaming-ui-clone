import { defineStore } from "pinia";

export const useMyListStore = defineStore("myList", {
  state: () => ({
    favorites: [],
  }),

  actions: {
    addMovie(movie) {
      const exists = this.favorites.find(
        (item) => item.id === movie.id
      );

      if (!exists) {
        this.favorites.push(movie);
      }
    },

    removeMovie(id) {
      this.favorites = this.favorites.filter(
        (movie) => movie.id !== id
      );
    },
  },
});
