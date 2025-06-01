<script setup>
const aboutInfo = {
  title: "Глаз неба — интеллектуальная система мониторинга лесов",
  description: `Мы создаем автономное решение на базе беспилотников и искусственного интеллекта
  для мониторинга и предотвращения лесных пожаров. Дрон с ИИ-помощником способен самостоятельно патрулировать
  территорию, выявлять задымление, оценивать угрозу и возвращаться к оператору.`,
  features: [
    {
      icon: "mdi-fire-alert",
      title: "Обнаружение пожаров",
      description: "ИИ анализирует видеопоток и моментально реагирует на дым или огонь."
    },
    {icon: "mdi-drone", title: "Автономный облёт", description: "Полный контроль над маршрутом без участия человека."},
    {
      icon: "mdi-brain",
      title: "Искусственный интеллект",
      description: "Моделирует развитие пожара и рекомендует действия оператору."
    },
    {
      icon: "mdi-laptop",
      title: "Единая платформа",
      description: "ПО с понятным интерфейсом для управления, визуализации и аналитики."
    }
  ]
};
</script>

<template>
  <v-container class="py-12">
    <v-row justify="center" class="mb-8">
      <v-col cols="12" md="12" lg="12">
        <h1 class="responsive-title text-center font-weight-bold mb-8">О проекте</h1>
        <v-card class="pa-6 about-card" elevation="4">
          <h3 class="text-h4 font-weight-medium mb-4">{{ aboutInfo.title }}</h3>
          <p class="text-body-1">{{ aboutInfo.description }}</p>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col
          v-for="(feature, index) in aboutInfo.features"
          :key="index"
          cols="12"
          sm="6"
          md="6"
      >
        <v-card class="d-flex flex-column justify-start align-center pa-4 text-center feature-card" elevation="2">
          <v-icon size="60" color="primary" class="mb-2">{{ feature.icon }}</v-icon>
          <h4 class="text-h5 font-weight-bold mb-2">{{ feature.title }}</h4>
          <p class="text-subtitle-1">{{ feature.description }}</p>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.about-card {
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
  background: #3c3e47;
  border-radius: 0px;
  margin: 0 auto;
  max-width: 1600px;
  width: 100%;
}

.feature-card {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
