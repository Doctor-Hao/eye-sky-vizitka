<script setup>
const features = [
  { icon: "mdi-drone", title: "Автоматический мониторинг", description: "Наши дроны автономно патрулируют территорию 24/7." },
  { icon: "mdi-brain", title: "ИИ-аналитика угроз", description: "Распознает подозрительные действия и аномалии." },
  { icon: "mdi-bell-alert", title: "Мгновенные уведомления", description: "Оперативные оповещения на телефон или ПК." }
];
</script>

<template>
  <v-container>
    <h2 class="text-h4 font-weight-bold mb-6 text-center">Почему выбирают нас?</h2>
    <v-row>
      <v-col v-for="feature in features" :key="feature.title" cols="12" md="4">
        <v-card class="pa-4 text-center" elevation="6">
          <v-icon size="48" class="mb-3" color="primary">{{ feature.icon }}</v-icon>
          <h3 class="text-h6 font-weight-medium">{{ feature.title }}</h3>
          <p class="text-body-2 mt-2">{{ feature.description }}</p>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
