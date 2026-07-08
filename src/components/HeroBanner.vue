<template>
  <section
    class="hero"
    :style="{ backgroundImage: `url(${movie.image})` }"
  >
    <div class="overlay">
      <div class="content">
        <span class="tag">STREAMFLIX ORIGINAL</span>

        <h1>{{ movie.title }}</h1>

        <p>{{ movie.description }}</p>

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
defineProps({
  movie: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.hero {
  height: 80vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
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
