<template>
  <section class="hero">
    <div class="overlay">
      <div class="content">
        <span class="tag">STREAMFLIX ORIGINAL</span>

        <h1>The Last Kingdom</h1>

        <p>
          Seorang pejuang Saxon harus memilih antara keluarga yang
          membesarkannya dan tanah kelahirannya.
        </p>

        <div class="buttons">
          <button class="play">
            <i class="fas fa-play"></i>
            Play
          </button>

          <button class="info">
            <i class="fas fa-info-circle"></i>
            More Info
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped lang="scss">
.hero {
  height: 90vh;

  background-image: url("https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1600");
  background-size: cover;
  background-position: center;
}

.overlay {
  height: 100%;
  background: linear-gradient(
      rgba(0,0,0,.45),
      rgba(0,0,0,.9)
  );

  display:flex;
  align-items:center;
}

.content{
  margin-left:80px;
  max-width:600px;
  color:white;
}

.tag{
  color:#E50914;
  font-weight:bold;
}

h1{
  font-size:64px;
  margin:15px 0;
}

p{
  line-height:1.8;
  color:#ddd;
}

.buttons{
  display:flex;
  gap:20px;
  margin-top:30px;
}

button{
  padding:15px 28px;
  border-radius:6px;
  font-size:16px;
}

.play{
  background:white;
  color:black;
}

.info{
  background:rgba(255,255,255,.2);
  color:white;
}
</style>
