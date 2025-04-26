<script setup>
const problems = [
    {
    icon: 'mdi-drone',
    title: 'Доступ в труднодоступные зоны',
    description: 'Наши дроны легко патрулируют болота, густой подлесок и сложный рельеф.'
  },
  {
    icon: 'mdi-radar',
    title: 'Покрытие всей территории',
    description: 'Облёт по заранее заданным точкам исключает «слепые» зоны мониторинга.'
  },
  {
    icon: 'mdi-bell-ring',
    title: 'Мгновенные оповещения',
    description: 'ИИ мгновенно фиксирует задымление/очаги пожаров и отправляет сигнал оператору.'
  },
  {
    icon: 'mdi-calendar-alert',
    title: 'Усиленный контроль в пожароопасный период',
    description: 'Частые облёты зон повышенного риска в сухой сезон помогают вовремя выявлять любые очаги.'
  },
  {
    icon: 'mdi-cash-minus',
    title: 'Снижение эксплуатационных расходов',
    description: 'Автоматизация сокращает затраты на наземные бригады, авиацию и стационарные системы.'
  },
  {
    icon: 'mdi-chart-box-outline',
    title: 'Аналитика и отчётность',
    description: 'Генерируем подробные отчёты и статистику для планирования профилактических мероприятий.'
  }
]
</script>

<template>
  <v-container>
    <h2 class="text-h4 font-weight-bold mb-6 text-center">Какие проблемы мы решаем?</h2>
    <v-row align="stretch">
      <v-col v-for="problem in problems" :key="problem.title" cols="12" md="4">
        <v-card class="pa-4 text-center fill-height" elevation="4">
          <v-card-text>
            <v-icon size="48" class="mb-3" color="primary">{{ problem.icon }}</v-icon>
            <h3 class="text-h5 font-weight-medium">{{ problem.title }}</h3>
            <p class="text-body-2 mt-2">{{ problem.description }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.fill-height {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
