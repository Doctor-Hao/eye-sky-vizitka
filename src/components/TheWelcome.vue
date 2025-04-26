<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// WebP + fallback
import forestWebp from '@/assets/bg-forest.webp'
import forestFallback from '@/assets/bg-forest.jpg'

// Трекинг scrollY
const scrollY = ref(0)

function handleScroll() {
  scrollY.value = window.scrollY
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

// Параллакс-сдвиг
const getParallaxStyle = () => {
  const offset = scrollY.value * 0.4
  return {
    transform: `translateY(${offset}px)`
  }
}

// Прокрутка к следующему экрану
// function scrollToNext() {
//   const height = document.querySelector('.parallax-wrapper').clientHeight
//   window.scrollTo({ top: height, behavior: 'smooth' })
// }
</script>

<template>
  <div class="parallax-wrapper">
    <!-- Фон -->
    <picture class="parallax-bg" :style="getParallaxStyle()">
      <source :srcset="forestWebp" type="image/webp" />
      <img :src="forestFallback" alt="Forest background" />
    </picture>

    <!-- Контент -->
    <div class="parallax-content">
      <v-container class="fill-height d-flex flex-column align-center justify-center text-center">
        <v-responsive max-width="800">
          <div class="text-block mt-8">
            <h1 class="title text-h2">Глаз Неба</h1>
            <p class="subtitle text-h5">Интеллектуальная система мониторинга лесов с автономными дронами и ИИ-аналитикой</p>
          </div>
        </v-responsive>
      </v-container>
    </div>

    <!-- Стрелка вниз -->
    <div class="scroll-down">
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
  padding: 16px;
}

.text-block {
  display: inline-block;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  padding: 24px;
  border-radius: 12px;
}

.title {
  margin: 0;
  font-size: 2.5rem;
  font-weight: bold;
  color: white;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
}

.subtitle {
  margin: 8px 0 0;
  font-size: 1.25rem;
  color: white;
  text-shadow: 0 0 8px rgba(0, 0, 0, 0.6);
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
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(8px); }
}
</style>
