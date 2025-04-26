<script setup>
// Импорт фотографий участников
import konstantinPhoto from '@/assets/kostia.png'
import evgenyPhoto from '@/assets/eugeniy.png'
import dmitryPhoto from '@/assets/dmitriy.png'
import kseniaPhoto from '@/assets/kseniya.png'
import egorPhoto from '@/assets/egor.png'

// Данные команды проекта
const team = [
  {
    photo: konstantinPhoto,
    position: 'CTO / Frontend-Lead',
    name: 'Константин Жмуровский'
  },
  {
    photo: evgenyPhoto,
    position: 'ML Engineer / Backend-Lead',
    name: 'Евгений Балахнин'
  },
  {
    photo: dmitryPhoto,
    position: 'DevOps-Engineer / Backend',
    name: 'Дмитрий Аратин'
  },
  {
    photo: egorPhoto,
    position: 'Product Manager',
    name: 'Егор Поночевный'
  },
  {
    photo: kseniaPhoto,
    position: 'Designer & Marketer',
    name: 'Ксения Иушина'
  }
]
</script>

<template>
  <section>
    <v-container fluid class="py-12">
      <!-- Заголовок -->
      <v-row justify="center" class="mb-8">
        <v-col cols="12" md="8">
          <h2 class="text-h4 text-center font-weight-bold">
            Команда проекта
          </h2>
        </v-col>
      </v-row>
      <!-- Список участников -->
      <v-row justify="center" align="stretch">
        <v-col
            v-for="member in team"
            :key="member.name"
            cols="12"
            sm="6"
            md="3"
        >
          <v-sheet elevation="2" rounded class="pa-4 text-center">
              <v-avatar size="300" tile class="mx-auto mb-4">
            <img
                :src="member.photo"
                width="200"
                height="600"
                alt="Фото {{ member.name }}"
                style="object-fit: scale-down"
            />
          </v-avatar>

            <div>
              <div class="subtitle-2 text-secondary">{{ member.position }}</div>
              <div class="subtitle-1 font-weight-medium mt-1">{{ member.name }}</div>
            </div>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
</style>
