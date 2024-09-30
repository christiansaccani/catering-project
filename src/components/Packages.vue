<template>
  <section id="packages">
    <div class="bg-wrapper">
      <v-container class="general-bg">
        <h3>Cosa Vi proponiamo :</h3>
        <v-row>
          <v-col cols="12" md="4" v-for="(packageItem, index) in packages" :key="index">
            <v-card class="mx-auto package-card">
              <v-img
                class="align-end text-white"
                height="200"
                :src="packageItem.image"
                cover
              >
                <v-card-title>{{ packageItem.title }}</v-card-title>
              </v-img>
  
              <v-card-subtitle class="pt-4">
                A partire da €{{ packageItem.price }}
              </v-card-subtitle>
  
              <v-card-text>
                {{ packageItem.description }}
              </v-card-text>
  
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn class="button" @click="requestPackage(packageItem.title)">
                  <span class="button__text"><i class="fa-solid fa-bell-concierge pe-2"></i>Richiedi</span>
                  <span class="button__icon">
                    <i class="fa-solid fa-bell-concierge"></i>
                  </span>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </section>
</template>
  
  <script>
  import weddingImage from '@/assets/packagesimg/package1.webp';
  import privateEventImage from '@/assets/packagesimg/package2.jpg';
  import corporateEventImage from '@/assets/packagesimg/package3.jpg';
  
  export default {
    data() {
      return {
        packages: [
          {
            title: "Matrimonio",
            description: "Pacchetto completo per matrimoni.",
            image: weddingImage,
            price: 1500,
          },
          {
            title: "Evento Privato",
            description: "Organizzazione eventi privati su misura.",
            image: privateEventImage,
            price: 800,
          },
          {
            title: "Evento Aziendale",
            description: "Gestione completa di eventi aziendali.",
            image: corporateEventImage,
            price: 2000,
          },
        ],
      };
    },
    methods: {
      requestPackage(title) {
        alert(`Richiesta pacchetto: ${title}`);
      },
    },
  };
  </script>
  
  <style scoped>
  .bg-wrapper {
    background-color: #f7e6ca;
    width: 100%;
  }
  
  .general-bg {
    max-width: 1400px;
    margin: 0 auto;
    padding: 1.5rem 1rem;
  }
  
  @media (min-width: 1200px) {
    .general-bg {
      padding: 5rem 2rem;
    }
  }
  
  .package-card {
    background-color: #eae8d8;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    width: 100%;
  }
  
  @media (max-width: 960px) {
    .package-card {
      width: 100%; /* Card larga 80% fino a md */
    }
  }
  
  @media (min-width: 960px) {
    .package-card {
      width: 100%; /* Card larga 100% su md e oltre */
    }
  }
  
  .v-card-title {
    font-size: 1.25rem;
    background-color: rgba(0, 0, 0, 0.5);
  }
  
  .v-card-subtitle {
    font-size: 1rem;
    color: #141414;
    font-weight: 700;
  }
  
  .v-card-text {
    color: #5d5c5b;
  }
  
  .button {
    position: relative;
    width: 150px;
    height: 40px;
    cursor: pointer;
    display: flex;
    align-items: center;
    border: 1px solid #5d5c5b;
    background-color: #eae8d8;
    overflow: hidden;
  }
  
  .button, .button__icon, .button__text, .fa-bell-concierge {
    transition: all 0.3s;
  }
  
  .button .button__text {
    color: #5d5c5b;
    font-weight: 600;
  }
  
  .button .button__icon {
    position: absolute;
    transform: translateX(109px);
    height: 100%;
    width: 39px;
    background-color: #5d5c5b;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .button .fa-bell-concierge {
    font-size: 20px;
    color: #5d5c5b;
  }
  
  .button:hover {
    background: #5d5c5b;
  }
  
  .button:hover .fa-bell-concierge {
    color: #eae8d8;
  }
  
  .button:hover .button__text {
    color: transparent;
  }
  
  .button:hover .button__icon {
    width: 148px;
    transform: translateX(0);
  }
  
  .button:active .button__icon {
    background-color: #146c54;
  }
  
  .button:active {
    border: 1px solid #146c54;
  }

    h3 {
        margin-bottom: 1rem;
        color: black;
        font-size: 1.2rem;
        font-weight: bold;
        text-transform: uppercase;
        text-align: center;

        @media (min-width: 1200px) {
            font-size: 2rem;
        }
    }
  </style>
  