<template>
  <nav class="['navbar', { scrolled: isScrolled}]">
    <div class="logo">
      StreamFlix
    </div>

    <ul class="menu">
      <li>Home</li>
      <li>Movies</li>
      <li>Series</li>
      <li>My List</li>
    </ul>

    <div class="icons">
      <i class="fas fa-search"></i>
      <i class="fas fa-user-circle"></i>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped lang="scss">
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 60px;
  box-sizing: border-box;

  background: transparent;
  color: white;

  transition: background-color 0.3s ease;

  z-index: 1000;
}

.scrolled {
  background: rgba(20, 20, 20, 0.95);
  backdrop-filter: blur(8px);
}

.logo {
  font-size: 28px;
  font-weight: bold;
  color: #E50914;
}

.menu {
  display: flex;
  gap: 30px;
  list-style: none;
}

.menu li {
  cursor: pointer;
  transition: .3s;
}

.menu li:hover {
  color: #E50914;
}

.icons {
  display: flex;
  gap: 20px;
  font-size: 22px;
}

.icons i {
  cursor: pointer;
}
</style>
