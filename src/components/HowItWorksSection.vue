<script setup>
import { ref, computed, onMounted, onBeforeUnmount, nextTick } from 'vue'

// Данные шагов
const steps = [
  { icon: 'mdi-cog-outline', title: 'Установка и запуск системы', description: 'Оператор размещает дрон на площадке, подключает его к компьютеру и запускает программу управления.' },
  { icon: 'mdi-map-outline', title: 'Построение маршрута', description: 'В интерфейете на карте задаются контрольные точки полёта дрона: ширина маршрута, высота полёта и порядок визитов.' },
  { icon: 'mdi-airplane', title: 'Автономный полёт', description: 'Дрон автоматически облетает все заданные точки, удерживая заданную высоту и скорость, без ручного управления.' },
  { icon: 'mdi-chart-line', title: 'Сбор и анализ данных', description: 'Видеопоток в реальном времени передаётся на компьютер, где встроенные алгоритмы ИИ обрабатывают кадры и выделяют рельеф местности.' },
  { icon: 'mdi-fire', title: 'Детекция и моделирование пожара', description: 'Система анализирует кадры на наличие очагов возгорания, строит модель распространения пламени и выдает предупреждения о зонах риска.' },
  { icon: 'mdi-refresh', title: 'Управление энергией и повторный запуск', description: 'При снижении заряда дрон автоматически возвращается на точку старта, оператор заменяет аккумулятор и кликом возобновляет миссию с последней непройденной точки.' }
]

// Адаптивность: отслеживаем ширину экрана
const isMobile = ref(false)
function updateIsMobile() {
  isMobile.value = window.innerWidth <= 600
}

// Логика дрона и шагов
const activeStep = ref(0)
const droneTop = ref(0)
const wrapper = ref(null)
const stepEls = ref([])
const iconSize = 48
const startOffset = iconSize * 10

function onScroll() {
  if (isMobile.value) return
  const w = wrapper.value
  const wrapperTop = w.getBoundingClientRect().top + window.scrollY
  const scrollY = window.scrollY || window.pageYOffset
  const inside = scrollY - wrapperTop + startOffset
  const maxY = w.clientHeight - iconSize
  droneTop.value = Math.min(Math.max(inside, 0), maxY)

  const droneCenter = droneTop.value + iconSize / 2
  let closestIndex = 0
  let closestDistance = Infinity
  stepEls.value.forEach((el, i) => {
    const elCenter = el.offsetTop + el.offsetHeight / 2
    const distance = Math.abs(elCenter - droneCenter)
    if (distance < closestDistance) {
      closestDistance = distance
      closestIndex = i
    }
  })
  activeStep.value = closestIndex
}

onMounted(() => {
  nextTick(() => {
    stepEls.value = Array.from(wrapper.value?.querySelectorAll('.timeline-step') || [])
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', updateIsMobile)
    updateIsMobile()
    onScroll()
  })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', updateIsMobile)
})

const droneStyle = computed(() => ({
  position: 'absolute',
  left: 'calc(50% - 24px)',
  top: `${droneTop.value}px`,
  zIndex: 5,
  transition: 'top 0.15s ease-out'
}))
</script>

<template>
  <v-container>
    <h1 class="responsive-title font-weight-bold mb-10 text-center">Как это работает?</h1>

    <!-- Большой экран: v-timeline -->
    <div v-if="!isMobile" class="timeline-wrapper" ref="wrapper">
      <v-icon :style="droneStyle" :size="iconSize" color="primary">mdi-drone</v-icon>
      <v-timeline align="center" align-top>
        <v-timeline-item
          v-for="(step, index) in steps"
          :key="index"
          small
          :icon="step.icon"
          class="timeline-item-wrapper"
        >
          <div class="timeline-step card-wrapper" ref="el => stepEls.value[index] = el">
            <v-card
              :elevation="activeStep === index ? 10 : 2"
              :class="{ 'active-card': activeStep === index }"
              class="pa-4"
            >
              <v-card-text class="text-center">
                <v-icon size="56" class="mb-2" color="primary">{{ step.icon }}</v-icon>
                <h3 class="text-h6 font-weight-bold mb-2">{{ step.title }}</h3>
                <p class="text-body-2">{{ step.description }}</p>
              </v-card-text>
            </v-card>
          </div>
        </v-timeline-item>
      </v-timeline>
    </div>

    <!-- Маленький экран: простая колонка карточек, выровненных по центру -->
    <div v-else class="timeline-mobile">
      <v-row justify="center">
        <v-col
          v-for="(step, idx) in steps"
          :key="idx"
          cols="12"
          class="d-flex justify-center"
        >
          <v-card class="pa-1 mb-2 mx-auto" max-width="500">
            <v-card-text class="text-center">
              <v-icon size="56" class="mb-2" color="primary">{{ step.icon }}</v-icon>
              <h3 class="text-h6 font-weight-bold mb-2">{{ step.title }}</h3>
              <p class="text-body-2">{{ step.description }}</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<style scoped>
.timeline-wrapper {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 40px;
}
.card-wrapper {
  display: flex;
  justify-content: center;
}
.timeline-step .v-card {
  width: 100%;
  max-width: 500px;
}
.active-card {
  background-color: rgba(25, 118, 210, 0.15) !important;
  outline: 2px solid #1976D2;
  transition: background-color 0.3s ease, border 0.3s ease;
}
.active-dot .v-timeline-divider__dot {
  background-color: #1976D2 !important;
  box-shadow: 0 0 12px #1976D2 !important;
  outline: 2px solid white;
}
.timeline-mobile .v-card {
  max-width: 100%;
}
@media (max-width: 600px) {
  .timeline-wrapper {
    padding-top: 20px;
  }
}
</style>
