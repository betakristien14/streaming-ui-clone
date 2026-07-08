<template>
  <div class="loading-container">
    <div class="spinner"></div>
    <p>Loading movies...</p>
  </div>
</template>

<script setup>
</script>

<style scoped>
.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  color: white;
}

.spinner {
  width: 60px;
  height: 60px;
  border: 6px solid rgba(255,255,255,.2);
  border-top: 6px solid #e50914;
  border-radius: 50%;
  animation: spin .8s linear infinite;
  margin-bottom: 20px;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
