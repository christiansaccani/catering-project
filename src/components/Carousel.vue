<template>
  <v-container fluid class="carousel-container">
      <div class="carousel-inner">
          <v-carousel
              height="70vh"
              v-model="model"
              cycle
              :interval="5000"
              hide-delimiter-background
              class="carousel"
          >
              <v-carousel-item
                  v-for="(image, i) in images"
                  :key="i"
              >
                  <v-sheet height="100%" class="image-sheet">
                      <div class="d-flex fill-height justify-center align-center zoom-animation">
                          <img :src="image" alt="Slide Image" class="carousel-image" />
                      </div>
                  </v-sheet>
              </v-carousel-item>

              <template v-slot:prev>
                  <v-btn
                      icon
                      @click="prevImage"
                      class="carousel-arrow prev-arrow"
                  >
                      <i class="mdi mdi-chevron-left"></i>
                  </v-btn>
              </template>

              <template v-slot:next>
                  <v-btn
                      icon
                      @click="nextImage"
                      class="carousel-arrow next-arrow"
                  >
                      <i class="mdi mdi-chevron-right"></i>
                  </v-btn>
              </template>
          </v-carousel>

          <v-carousel-indicators v-model="model" :length="images.length" class="carousel-indicators" />
      </div>
  </v-container>
</template>

<script>
import image1 from '@/assets/carousel/immagine1.webp';
import image2 from '@/assets/carousel/immagine2.jpg';
import image3 from '@/assets/carousel/immagine3.jpg';
import image4 from '@/assets/carousel/immagine4.jpg';

export default {
  data() {
      return {
          images: [image1, image2, image3, image4],
          model: 0,
      };
  },
  methods: {
      nextImage() {
          this.model = (this.model + 1) % this.images.length;
      },
      prevImage() {
          this.model = (this.model - 1 + this.images.length) % this.images.length;
      },
  },
};
</script>

<style lang="scss" scoped>
.carousel-container {
  background-color: #fff6e6;
  margin: 0 auto;
  padding: 2rem 1rem;

  @media (min-width: 1200px) {
    padding: 4rem 2rem;
  }
}

.carousel-inner {
  max-width: 1300px;
  margin: 2rem auto 4rem;
  padding: 0 1rem;

  @media (min-width: 960px) {
      padding: 0 2rem;
  }
}

.carousel {
  margin-top: 0;
  border-radius: 24px;

  @media (min-width: 1200px) {
      border-radius: 36px;
  }
}

.image-sheet {
  background-color: #fff6e6;
  height: 100%;
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.carousel-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);

  &.prev-arrow {
      left: 10px;
  }

  &.next-arrow {
      right: 10px;
  }

  font-size: 1.5rem;

  @media (min-width: 960px) {
      font-size: 2.5rem;
      top: 50%
  }
}

.carousel-indicators {
  position: absolute; /* Mantiene gli indicatori alla base */
  bottom: 10px; /* Posiziona gli indicatori sopra il bordo inferiore */
  left: 50%;
  transform: translateX(-50%);
}

.mdi.mdi-chevron-left {
  display: flex;
  justify-content: center;
  align-items: center;
}

.mdi.mdi-chevron-right {
  display: flex;
  justify-content: center;
  align-items: center;
}

.zoom-animation {
    animation: zoom 5.5s linear;
}

@keyframes zoom {
    0% {
        transform: scale(1);
    }
    100% {
        transform: scale(1.05);
    }
}

</style>
