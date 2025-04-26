<script setup>
import { ref } from 'vue'

// Контактные данные
const contact = {
  telegram: {
    icon: 'mdi-telegram',
    label: 'telegram',
    link: 'https://t.me/MengHao0'
  },
  email: {
    icon: 'mdi-email',
    label: 'zhmuruk1@gmail.com'
  }
}

// Состояние Snackbar
const snackbar = ref(false)
const snackbarMessage = ref('')

// Копирование email
function copyEmail() {
  const text = contact.email.label
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text)
      .then(() => {
        snackbarMessage.value = 'Email скопирован в буфер обмена'
        snackbar.value = true
      })
      .catch(() => {
        // fallback if writeText fails
        fallbackCopyText(text)
      })
  } else {
    // fallback for insecure context or unsupported API
    fallbackCopyText(text)
  }
}

// Функция fallback копирования
function fallbackCopyText(text) {
  const textarea = document.createElement('textarea')
  textarea.value = text
  textarea.setAttribute('readonly', '')
  textarea.style.position = 'absolute'
  textarea.style.left = '-9999px'
  document.body.appendChild(textarea)
  textarea.select()
  try {
    document.execCommand('copy')
    snackbarMessage.value = 'Email скопирован в буфер обмена'
    snackbar.value = true
  } catch {
    snackbarMessage.value = 'Не удалось скопировать email'
    snackbar.value = true
  }
  document.body.removeChild(textarea)
}
</script>

<template>
  <v-container>
    <h2 class="text-h4 font-weight-bold mb-6 text-center">Контакты</h2>
    <v-card class="mx-auto" max-width="800" elevation="6">
      <!-- Контактные кнопки -->
      <v-card-text class="d-flex justify-center">
        <v-btn
          :href="contact.telegram.link"
          target="_blank"
          text
          class="mx-4"
        >
          {{ contact.telegram.label }}
        </v-btn>
        <v-btn
          text
          class="mx-4"
          @click="copyEmail"
        >
          <v-icon left class="mr-2">{{ contact.email.icon }}</v-icon>
          {{ contact.email.label }}
        </v-btn>
      </v-card-text>
    </v-card>
    <!-- Snackbar уведомление -->
    <v-snackbar
      v-model="snackbar"
      :timeout="2000"
      location="top"
      color="success"
      elevation="4"
    >
      {{ snackbarMessage }}
    </v-snackbar>
  </v-container>
</template>

<style scoped>
/* Vuetify обеспечивает кроссбраузерность */
</style>
