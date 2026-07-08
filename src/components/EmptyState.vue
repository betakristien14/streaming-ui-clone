<template>
  <div class="empty-state">
    <div class="icon">{{ icon }}</div>

    <h2>{{ title }}</h2>

    <p>{{ message }}</p>
  </div>
</template>

<script setup>
defineProps({
  icon: {
    type: String,
    default: "📭",
  },

  title: {
    type: String,
    default: "Tidak ada data",
  },

  message: {
    type: String,
    default: "",
  },
});
</script>

<style scoped>
.empty-state {
  padding: 80px 20px;
  text-align: center;
  color: white;
}

.icon {
  font-size: 70px;
  margin-bottom: 20px;
}

h2 {
  margin-bottom: 10px;
}

p {
  color: #b3b3b3;
}
</style>
