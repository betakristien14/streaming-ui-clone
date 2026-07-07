<template>
  <nav class="navbar">
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
</script>

<style scoped lang="scss">
.navbar {
  height: 70px;
  background: #141414;
  color: white;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 60px;
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
