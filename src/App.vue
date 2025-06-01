<script setup>
import {RouterLink, RouterView} from 'vue-router'
import logo from '@/assets/logo.svg'
// const menuItems = ["Главная", "Преимущества", "Как это работает", "Кейсы", "Контакты"];

import {onMounted, onBeforeUnmount} from 'vue'

onMounted(() => {
  let targetScroll = window.scrollY
  let currentScroll = window.scrollY
  let isAnimating = false

  const ease = 0.08

  const animateScroll = () => {
    const diff = targetScroll - currentScroll
    currentScroll += diff * ease

    window.scrollTo(0, currentScroll)

    if (Math.abs(diff) > 0.5) {
      requestAnimationFrame(animateScroll)
    } else {
      isAnimating = false
    }
  }

  const onWheel = (event) => {
    event.preventDefault()

    const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight

    // direction
    const delta = event.deltaY

    // обновляем target, но ограничиваем по границам
    targetScroll = Math.max(0, Math.min(targetScroll + delta, maxScroll))

    if (!isAnimating) {
      isAnimating = true
      animateScroll()
    }
  }

  window.addEventListener('wheel', onWheel, {passive: false})

  onBeforeUnmount(() => {
    window.removeEventListener('wheel', onWheel)
  })
})
</script>

<template>
  <v-app>
    <v-app-bar theme="dark" app elevate-on-scroll>
      <v-container class="d-flex justify-start align-center">
          <v-img
              :src="logo"
              alt="Logo"
              max-width="60"
              class="logo-svg"
              cover
          />
        <v-btn text class="text-h6 font-weight-bold">
          Глаз Неба
        </v-btn>
        <!--      <v-btn v-for="item in menuItems" :key="item" text>{{ item }}</v-btn>-->
      </v-container>
    </v-app-bar>
    <v-main class="ma-0 pa-0">
      <RouterView/>
    </v-main>
  </v-app>
</template>

<style scoped>
.logo-svg {
  filter: invert(1); /* делает его белым */
  /* или: */
  color: #2196f3; /* если внутри SVG используется fill="currentColor" */
}
</style>
