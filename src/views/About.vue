<template>
  <div class="about">
    <div class="overlay">
      <h1>🎬 About StreamFlix</h1>

      <p>
        StreamFlix adalah aplikasi streaming film yang dikembangkan menggunakan
        Vue 3, Vite, Pinia, Axios, dan JSON Server sebagai proyek pembelajaran
        Frontend Development.
      </p>

      <div class="features">
        <div class="card">
          <h3>🎥 Movie Collection</h3>
          <p>Menampilkan daftar film berdasarkan kategori.</p>
        </div>

        <div class="card">
          <h3>🔍 Search Movie</h3>
          <p>Mencari film dengan cepat berdasarkan judul.</p>
        </div>

        <div class="card">
          <h3>❤️ My List</h3>
          <p>Menyimpan film favorit menggunakan Pinia.</p>
        </div>

        <div class="card">
          <h3>📄 Detail Movie</h3>
          <p>Menampilkan informasi lengkap setiap film.</p>
        </div>
      </div>

      <div class="footer">
        <p>Developed by Beta Kristien Manullang</p>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.about {
  min-height: 100vh;
  background: #141414;
  color: white;
  padding: 100px 60px;
}

.overlay {
  max-width: 1100px;
  margin: auto;
}

h1 {
  color: #e50914;
  font-size: 42px;
  margin-bottom: 20px;
}

p {
  line-height: 1.8;
  color: #ddd;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 20px;
  margin-top: 50px;
}

.card {
  background: #1f1f1f;
  border-radius: 12px;
  padding: 25px;
  transition: 0.3s;
}

.card:hover {
  transform: translateY(-8px);
  background: #2a2a2a;
}

.card h3 {
  color: #e50914;
  margin-bottom: 15px;
}

.footer {
  margin-top: 60px;
  text-align: center;
  color: #999;
}
</style>
