<script setup>
</script>

<template>
  <v-container>
    <h2 class="text-h4 font-weight-bold mb-6 text-center">Свяжитесь с нами</h2>
    <v-card class="pa-4 mx-auto" max-width="600" elevation="6">
      <v-form>
        <v-text-field label="Ваше имя" required outlined></v-text-field>
        <v-text-field label="Ваш email" required type="email" outlined></v-text-field>
        <v-textarea label="Ваше сообщение" outlined></v-textarea>
        <v-btn color="primary" class="mt-3" block elevation="4">Отправить</v-btn>
      </v-form>
    </v-card>
  </v-container>
</template>
