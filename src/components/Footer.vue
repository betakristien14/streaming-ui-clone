<template>
  <footer class="footer">
    <div class="container">
      <h2>StreamFlix</h2>

      <p>
        Aplikasi streaming film berbasis Vue 3 yang dibuat untuk
        pembelajaran Frontend Development.
      </p>

      <div class="links">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/my-list">My List</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </div>

      <p class="copyright">
        © 2026 StreamFlix • Developed by Beta Kristien Manullang
      </p>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style scoped>
.footer {
  margin-top: 80px;
  background: #111;
  color: white;
  padding: 50px 20px;
}

.container {
  max-width: 1200px;
  margin: auto;
  text-align: center;
}

h2 {
  color: #e50914;
  margin-bottom: 15px;
}

.links {
  margin: 25px 0;

  display: flex;
  justify-content: center;
  gap: 25px;
}

.links a {
  color: white;
  text-decoration: none;
}

.links a:hover {
  color: #e50914;
}

.copyright {
  color: #888;
  font-size: 14px;
}
</style>
