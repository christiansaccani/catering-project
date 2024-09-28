<template>
  <v-app-bar app>
    <v-container max-width="1400" class="d-flex justify-end align-center">
    <v-toolbar-title>
      <v-img src="@/assets/logo.png" max-width="60"></v-img>
    </v-toolbar-title>
    <v-spacer></v-spacer>
      <v-btn class="d-none d-sm-flex" variant="text">Chi siamo</v-btn>
      <v-btn class="d-none d-sm-flex" variant="text">Pacchetti</v-btn>
      <v-btn class="d-none d-sm-flex" variant="text">Contatti</v-btn>
      <v-menu class="d-sm-none" open-on-hover location="start">
        <template v-slot:activator="{ props }">
          <v-btn variant="text" v-bind="props" class="d-sm-none">
            <i class="fa-solid fa-bars"></i>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, index) in items" :key="index">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-container>
  </v-app-bar>
</template>

<script setup>
import { ref } from 'vue';

const items = ref([
  { title: 'Chi siamo' },
  { title: 'Pacchetti' },
  { title: 'Contatti' },
]);
</script>

<style lang="scss" scoped>
.v-app-bar {
  background-color: whitesmoke !important;
}

.v-btn {
  color: black;
  font-weight: 600;
  font-size: 1.5rem;
  text-transform: lowercase;
}

.v-list {
  background-color: whitesmoke !important;
  color: black;

  .v-list-item-title {
    font-weight: 600;
  }
}

.v-container {
  padding: 0 5%;
}
</style>
