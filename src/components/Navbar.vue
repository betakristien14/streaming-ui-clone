<template>
  <nav :class="['navbar', { scrolled: isScrolled }]">
    <div class="logo">
      StreamFlix
    </div>

    <ul class="menu">
      <li>
        <RouterLink to="/">Home</RouterLink>
      </li>

      <li>
        <RouterLink to="/my-list">My List</RouterLink>
      </li>

      <li>
        <RouterLink to="/about">About</RouterLink>
      </li>
    </ul>

    <div class="icons">
      <i class="fas fa-search"></i>
      <i class="fas fa-user-circle"></i>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { RouterLink } from "vue-router";

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

  transition: all 0.3s ease;
  z-index: 1000;
}

.scrolled {
  background: rgba(20, 20, 20, 0.95);
  backdrop-filter: blur(8px);
}

.logo {
  font-size: 28px;
  font-weight: bold;
  color: #e50914;
  cursor: pointer;
}

.menu {
  display: flex;
  align-items: center;
  gap: 30px;

  list-style: none;
  margin: 0;
  padding: 0;
}

.menu li {
  font-size: 16px;
}

/* RouterLink */
.menu a {
  text-decoration: none;
  color: white;
  transition: color 0.3s ease;
}

.menu a:hover {
  color: #e50914;
}

.icons {
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 22px;
}

.icons i {
  cursor: pointer;
  transition: color 0.3s ease;
}

.icons i:hover {
  color: #e50914;
}
</style>
