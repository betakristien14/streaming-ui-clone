<template>
  <div v-if="show" class="modal">
    <div class="modal-content">
      <button class="close" @click="$emit('close')">
        ✕
      </button>

      <iframe
        v-if="show"
        :src="trailer"
        title="Movie Trailer"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script setup>
defineProps({
  show: Boolean,
  trailer: String,
});

defineEmits(["close"]);
</script>

<style scoped>
.modal {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 9999;
}

.modal-content {
  position: relative;
  width: 80%;
  max-width: 900px;
}

iframe {
  width: 100%;
  height: 500px;
  border-radius: 10px;
}

.close {
  position: absolute;
  top: -45px;
  right: 0;

  width: 40px;
  height: 40px;

  border: none;
  border-radius: 50%;

  background: #e50914;
  color: white;

  font-size: 18px;
  cursor: pointer;
}
</style>
