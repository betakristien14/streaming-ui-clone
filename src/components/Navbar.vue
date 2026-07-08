<template>
  <nav :class="['navbar', { scrolled: isScrolled }]">
    <!-- Logo -->
    <div class="logo">
      <RouterLink to="/">StreamFlix</RouterLink>
    </div>

    <!-- Menu -->
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

    <!-- Right Section -->
    <div class="right-section">

      <!-- Search -->
      <div class="search-box">
        <i class="fas fa-search"></i>

        <input
          type="text"
          placeholder="Cari film..."
          v-model="keyword"
          @input="searchMovie"
        />
      </div>

      <!-- Belum Login -->
      <RouterLink
        v-if="!user"
        to="/login"
        class="login-btn"
      >
        Login
      </RouterLink>

      <!-- Sudah Login -->
      <div
        v-else
        class="user-menu"
      >
        <span class="username">
          👋 {{ user.name }}
        </span>

        <button
          class="logout-btn"
          @click="logout"
        >
          Logout
        </button>
      </div>

    </div>
  </nav>
</template>

<script setup>
import {
  ref,
  computed,
  onMounted,
  onUnmounted,
} from "vue";

import {
  RouterLink,
  useRouter,
} from "vue-router";

import { useAuthStore } from "@/stores/authStore";

const emit = defineEmits(["search"]);

const keyword = ref("");

const searchMovie = () => {
  emit("search", keyword.value);
};

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

const router = useRouter();
const authStore = useAuthStore();

const user = computed(() => authStore.user);

const logout = () => {
  authStore.logout();
  router.push("/login");
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
  transition: 0.3s;
  z-index: 1000;
}

.scrolled {
  background: rgba(20, 20, 20, 0.95);
  backdrop-filter: blur(8px);
}

/* Logo */

.logo a {
  color: #e50914;
  text-decoration: none;
  font-size: 30px;
  font-weight: bold;
}

/* Menu */

.menu {
  display: flex;
  gap: 30px;
  list-style: none;
}

.menu a {
  color: white;
  text-decoration: none;
  transition: 0.3s;
}

.menu a:hover,
.menu .router-link-active {
  color: #e50914;
}

/* Right */

.right-section {
  display: flex;
  align-items: center;
  gap: 15px;
}

/* Search */

.search-box {
  display: flex;
  align-items: center;
  gap: 10px;

  padding: 10px 15px;

  background: rgba(255, 255, 255, 0.12);
  border-radius: 25px;
}

.search-box i {
  color: white;
}

.search-box input {
  width: 220px;

  background: transparent;
  border: none;
  outline: none;

  color: white;
}

.search-box input::placeholder {
  color: #ccc;
}

/* Login */

.login-btn {
  background: #e50914;
  color: white;

  padding: 10px 20px;
  border-radius: 20px;

  text-decoration: none;
  transition: 0.3s;
}

.login-btn:hover {
  background: #b20710;
}

/* User */

.user-menu {
  display: flex;
  align-items: center;
  gap: 15px;
}

.username {
  color: white;
  font-weight: 600;
}

/* Logout */

.logout-btn {
  background: crimson;
  color: white;

  border: none;
  border-radius: 20px;

  padding: 10px 20px;

  cursor: pointer;
  transition: 0.3s;
}

.logout-btn:hover {
  background: #b00020;
}

/* Tablet */

@media (max-width: 992px) {
  .navbar {
    padding: 0 30px;
  }

  .search-box input {
    width: 150px;
  }
}

/* Mobile */

@media (max-width: 768px) {
  .navbar {
    padding: 0 20px;
  }

  .menu {
    display: none;
  }

  .search-box input {
    width: 100px;
  }

  .login-btn,
  .logout-btn {
    padding: 8px 15px;
    font-size: 14px;
  }

  .username {
    display: none;
  }
}
</style>
