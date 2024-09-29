<script setup>
  import Header from './components/Header.vue'
  import Jumbo from './components/Jumbo.vue'
  import AboutUs from './components/AboutUs.vue'
  import Carousel from './components/Carousel.vue'
  import Packages from './components/Packages.vue'
  import Footer from './components/Footer.vue'
</script>

<template>
  <v-app>
    <Header />
    <Jumbo />
    <AboutUs />
    <Carousel />
    <Packages />
    <Footer />
    <!-- <v-main>
      <router-view />
    </v-main> -->
  </v-app>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Vollkorn:ital,wght@0,400..900;1,400..900&display=swap');

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: 'Vollkorn', serif; /* Applica il font Vollkorn a tutto il progetto */
}
</style>
<!---------- Next Step ---------->

<!-- X Inserire sezione del Carosello X -->
 <!-- X Inserire sezione dei pacchetti (orizzontale telefono, verticali da tablet orizzontale) X -->
  <!-- X Footer X -->