<script setup>
const problems = [
  {
    icon: "mdi-cctv",
    title: "Ограниченный контроль территории",
    description: "Человеческий фактор и стационарные камеры не могут покрыть всю территорию."
  },
  {
    icon: "mdi-clock-alert",
    title: "Медленное реагирование",
    description: "Охрана не всегда успевает вовремя отреагировать на инциденты."
  },
  {
    icon: "mdi-cash-multiple",
    title: "Высокие расходы на безопасность",
    description: "Огромные затраты на персонал и стационарные системы."
  }
];
</script>

<template>
  <v-container>
    <h2 class="text-h4 font-weight-bold mb-6 text-center">Какие проблемы мы решаем?</h2>
    <v-row align="stretch">
      <v-col v-for="problem in problems" :key="problem.title" cols="12" md="4">
        <v-card class="pa-4 text-center fill-height" elevation="4">
          <v-card-text>
            <v-icon size="48" class="mb-3" color="primary">{{ problem.icon }}</v-icon>
            <h3 class="text-h6 font-weight-medium">{{ problem.title }}</h3>
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
