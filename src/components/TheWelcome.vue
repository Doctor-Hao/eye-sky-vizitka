<script setup>
import {ref, onMounted, onUnmounted} from 'vue'

// WebP + fallback
import forestWebp from '@/assets/bg-forest.webp'
import forestFallback from '@/assets/bg-forest.jpg'

// Трекинг scrollY
const scrollY = ref(0)

function handleScroll() {
  scrollY.value = window.scrollY
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, {passive: true})
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

// Параллакс сдвиг
const getParallaxStyle = () => {
  const offset = scrollY.value * 0.4
  return {
    transform: `translateY(${offset}px)`
  }
}

</script>

<template>
  <div class="parallax-wrapper">
    <!-- Фон -->
    <picture class="parallax-bg" :style="getParallaxStyle()">
      <source :srcset="forestWebp" type="image/webp"/>
      <img :src="forestFallback" alt="Forest background"/>
    </picture>

    <!-- Контент -->
    <div class="parallax-content">
      <v-container class="fill-height d-flex flex-column align-center justify-center text-center">
        <v-responsive max-width="800">
          <h1 class="text-h2 font-weight-bold text-white mb-4">Глаз Неба</h1>
          <p class="text-subtitle-1 text-white">
            Интеллектуальная система мониторинга лесов с автономными дронами и ИИ-аналитикой
          </p>
        </v-responsive>
      </v-container>
    </div>

    <!-- Стрелка вниз -->
    <div class="scroll-down" @click="scrollToNext">
      <v-icon size="40" color="white">mdi-chevron-down</v-icon>
    </div>
  </div>
</template>

<style scoped>
.parallax-wrapper {
  height: calc(100dvh - 64px); /* учёт высоты app-bar */
  position: relative;
  overflow: hidden;
  width: 100%;
}

.parallax-bg {
  position: absolute;
  width: 100%;
  height: 120%;
  top: -10%;
  left: 0;
  z-index: 1;
}

.parallax-bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.parallax-content {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
  padding: 16px;
}

/* Стрелка */
.scroll-down {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  cursor: pointer;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  50% {
    transform: translateX(-50%) translateY(8px);
  }
}
</style>
