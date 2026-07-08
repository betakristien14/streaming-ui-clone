<template>
  <div class="search-bar">
    <input
      type="text"
      placeholder="Cari film..."
      v-model="search"
      @input="emitSearch"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";

const emit = defineEmits(["search"]);
const search = ref("");

const emitSearch = () => {
  emit("search", search.value);
};
</script>

<style scoped>
.search-bar {
  padding: 20px 60px;
}

.search-bar input {
  width: 100%;
  max-width: 400px;
  padding: 12px 16px;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  outline: none;
}
</style>
