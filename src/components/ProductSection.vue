<script setup>
</script>

<template>
  <v-container>
    <h2 class="text-h4 font-weight-bold mb-6 text-center">Как работает система?</h2>
    <v-row>
      <v-col cols="12" md="6">
        <v-card class="pa-4" elevation="8">
          <v-card-text>
            <p class="text-body-1">
              Глаз неба – это автономная система дронов, оснащенная камерами и ИИ для анализа событий в режиме реального времени.
            </p>
            <v-list dense>
              <v-list-item prepend-icon="mdi-check">Автономные патрули</v-list-item>
              <v-list-item prepend-icon="mdi-check">Анализ видеопотока с ИИ</v-list-item>
              <v-list-item prepend-icon="mdi-check">Мгновенные оповещения</v-list-item>
              <v-list-item prepend-icon="mdi-check">Интеграция с существующими системами</v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-img src="https://source.unsplash.com/600x400/?drone,security" alt="Drone Security" contain class="rounded-lg elevation-6"></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>
