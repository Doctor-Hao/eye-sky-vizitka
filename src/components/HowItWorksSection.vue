<script setup>
import {ref, computed, onMounted, onBeforeUnmount, nextTick} from 'vue'

const steps = [
  {
    icon: 'mdi-cog-outline',
    title: 'Установка и запуск системы',
    description: 'Оператор размещает дрон на площадке, подключает его к компьютеру и запускает программу управления.'
  },
  {
    icon: 'mdi-map-outline',
    title: 'Построение маршрута',
    description: 'В интерфейсе на карте задаются контрольные точки полёта дрона: ширина маршрута, высота полёта и порядок визитов.'
  },
  {
    icon: 'mdi-airplane',
    title: 'Автономный полёт',
    description: 'Дрон автоматически облетает все заданные точки, удерживая заданную высоту и скорость, без ручного управления.'
  },
  {
    icon: 'mdi-chart-line',
    title: 'Сбор и анализ данных',
    description: 'Видеопоток в реальном времени передаётся на компьютер, где встроенные алгоритмы ИИ обрабатывают кадры и выделяют рельеф местности.'
  },
  {
    icon: 'mdi-fire',
    title: 'Детекция и моделирование пожара',
    description: 'Система анализирует кадры на наличие очагов возгорания, строит модель распространения пламени и выдает предупреждения о зонах риска.'
  },
  {
    icon: 'mdi-refresh',
    title: 'Управление энергией и повторный запуск',
    description: 'При снижении заряда дрон автоматически возвращается на точку старта, оператор заменяет аккумулятор и кликом возобновляет миссию с последней непройденной точки.'
  }
]

const activeStep = ref(0)
const droneTop = ref(0)
const wrapper = ref(null)
const stepEls = ref([])
const iconSize = 48
const startOffset = iconSize * 10

function onScroll() {
  const w = wrapper.value
  const wrapperTop = w.getBoundingClientRect().top + window.scrollY
  const scrollY = window.scrollY || window.pageYOffset

  const inside = scrollY - wrapperTop + startOffset
  const maxY = w.clientHeight - iconSize
  droneTop.value = Math.min(Math.max(inside, 0), maxY)

  const droneCenter = droneTop.value + iconSize / 2

  // Новая логика: находим ближайший step по расстоянию до центра карточки
  let closestIndex = 0
  let closestDistance = Infinity

  for (let i = 0; i < stepEls.value.length; i++) {
    const el = stepEls.value[i]
    const elCenter = el.offsetTop + el.offsetHeight / 2
    const distance = Math.abs(elCenter - droneCenter)

    if (distance < closestDistance) {
      closestDistance = distance
      closestIndex = i
    }
  }

  activeStep.value = closestIndex
}

onMounted(() => {
  nextTick(() => {
    stepEls.value = Array.from(wrapper.value.querySelectorAll('.timeline-step'))
    window.addEventListener('scroll', onScroll, {passive: true})
    onScroll()
  })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
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
    <h2 class="text-h3 font-weight-bold mb-10 text-center">Как это работает?</h2>

    <div class="timeline-wrapper" ref="wrapper">
      <!-- Дрон -->
      <v-icon :style="droneStyle" :size="iconSize" color="primary">mdi-drone</v-icon>

      <!-- Таймлайн -->
      <v-timeline align-top >
        <v-timeline-item
            v-for="(step, index) in steps"
            :key="index"
            small
            :icon="step.icon"
            class="timeline-cards"
            :class="{ 'active-dot': activeStep === index }"
        >
          <!-- Обёртка над карточкой -->
          <div
              class="timeline-step card-wrapper"
              ref="el => stepEls.value[index] = el"
          >
            <v-card
                :elevation="activeStep === index ? 10 : 2"
                :class="{
                  'active-card': activeStep === index,
                }"
                class="pa-4"
            >
              <v-card-text>
                <v-icon size="56" class="mb-2" color="primary">{{ step.icon }}</v-icon>
                <h3 class="text-h6 font-weight-bold mb-2">{{ step.title }}</h3>
                <p class="text-body-2">{{ step.description }}</p>
              </v-card-text>
            </v-card>
          </div>
        </v-timeline-item>
      </v-timeline>
    </div>
  </v-container>
</template>

<style >
.timeline-wrapper {
  padding-top: 40px;
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}

.card-wrapper {
  display: flex;
  justify-content: center;
}

.timeline-step v-card,
.timeline-step .v-card {
  max-width: 500px;
  width: 100%;
}

.align-left .timeline-card {
  margin-left: 0;
  margin-right: auto;
}

.align-right .timeline-card {
  margin-right: 0;
  margin-left: auto;
}

.active-card {
  background-color: rgba(25, 118, 210, 0.15)!important;
  outline: 2px solid #1976D2;
  transition: background-color 0.3s ease, border 0.3s ease;
}

.active-dot .v-timeline-divider__dot{
  background-color: #1976D2 !important; /* яркая заливка */
  box-shadow: 0 0 12px #1976D2 !important; /* светится 🔥 */
  outline: 2px solid white; /* или цвет темы */
}

</style>
