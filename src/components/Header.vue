<template>
  <v-app-bar :class="appBarClass" app>
    <v-container max-width="1400" class="d-flex justify-end align-center">
      <v-toolbar-title>
        <v-img src="@/assets/logo.png" max-width="60" style="margin-right: .5rem;"></v-img>
      </v-toolbar-title>
      <v-btn class="d-none d-sm-flex" variant="text" @click="scrollToSection('about')">Chi siamo</v-btn>
      <v-btn class="d-none d-sm-flex" variant="text" @click="scrollToSection('packages')">Pacchetti</v-btn>
      <v-btn class="d-none d-sm-flex" variant="text" @click="scrollToSection('contacts')">Contatti</v-btn>
      <h1 class="d-sm-none" location="start">
        Funny Catering
      </h1>
    </v-container>
  </v-app-bar>
</template>


<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const appBarClass = ref('default-color');

const handleScroll = () => {
  if (window.innerWidth > 1200 && window.scrollY > 692.73 && 1236.73 > window.scrollY || window.innerWidth > 1200 && window.scrollY > 2101.53 && 2800.23 > window.scrollY
  ) {
    appBarClass.value = 'scrolled-color';
  } else {
    appBarClass.value = 'default-color';
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

// Funzione per lo scroll automatico alle sezioni
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 64, // Compensa la height della app-bar
      behavior: 'smooth'
    });
  }
};
</script>


<style lang="scss" scoped>
.default-color {
  background-color: #fff6e6 !important;
  transition: all .4s linear;
}

.scrolled-color {
  background-color: #f7e6ca !important;
  transition: all .4s linear;
}

.v-btn {
  color: black;
  font-weight: 600;
  font-size: 1.5rem;
  text-transform: lowercase;
  border-radius: 12px;

  &:hover {
    background-color: rgba(234, 232, 216, 1);
  }
}

.v-list {
  background-color: #fff6e6 !important;
  color: black;

  .v-list-item-title {
    font-weight: 600;
  }
}

.v-container {
  padding: 0 5%;
}

h1 {
  color: black;
  font-weight: 800;
}
</style>
