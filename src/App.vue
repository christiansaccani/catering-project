<script setup>
  import Header from './components/Header.vue'
  import Jumbo from './components/Jumbo.vue'
  import AboutUs from './components/AboutUs.vue'
  import Carousel from './components/Carousel.vue'
</script>

<template>
  <v-app>
    <Header />
    <Jumbo />
    <AboutUs />
    <Carousel />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<style>

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  font-family: 'Georgia', serif;
}

</style>

<!---------- Next Step ---------->

<!-- Inserire sezione del Carosello -->
 <!-- Inserire sezione dei pacchetti (orizzontale telefono, verticali da tablet orizzontale) -->
  <!-- Footer -->