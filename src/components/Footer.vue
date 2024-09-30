<template>
  <section id="contacts">
    <div>
      <v-footer class="d-flex flex-column bg-teal text-black">
        <v-container class="text-center" max-width="1400">
          <div class="d-flex flex-column align-center">
            <strong>Rimani connesso con noi!</strong>
            <v-row justify="center">
              <v-btn
                v-for="icon in icons"
                :key="icon"
                :icon="icon"
                class="mx-1 pt-3"
                size="small"
                variant="plain"
              ></v-btn>
            </v-row>
          </div>
  
          <v-row class="mt-4" justify="center" align="center" gap-1>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="name"
                label="Nome"
                outlined
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="email"
                label="Email"
                outlined
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-textarea
                v-model="message"
                label="Messaggio"
                outlined
                rows="4"
                required
              ></v-textarea>
            </v-col>
            <v-col cols="12">
              <v-btn @click="submitForm" color="white" rounded class="send">
                Invia
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-footer>
  
      <v-footer class="bg-head text-black">
        <v-container class="text-center" max-width="1400">
          <v-row justify="center" no-gutters>
            <v-col
              v-for="(link, index) in links"
              :key="index"
              class="mx-2 my-1"
              style="padding: 0 1rem"
            >
              {{ link }}             
            </v-col>
          </v-row>
          <v-col>
            <strong>© 2022 Funny Catering</strong>
          </v-col>
        </v-container>
      </v-footer>
    </div>
  </section>
</template>
  
  <script>
  export default {
    data: () => ({
      name: '',
      email: '',
      message: '',
      links: [
        'Via Circonvallazione 1, 42020 Quattro Castella (RE) - Italy',
        'info@funnycatering.com',
        '339 3643873',
      ],
      icons: [
        'mdi-facebook',
        'mdi-instagram',
      ],
    }),
    methods: {
      submitForm() {
        alert(`Nome: ${this.name}, Email: ${this.email}, Messaggio: ${this.message}`);
      },
    },
  };
  </script>
  
  <style scoped>
  .bg-head {
    background-color: #eae8d8;
    padding: .5rem 1rem;
  }
  .bg-teal {
    background-color: #eae8d8 !important;
    padding: 1rem 1rem;
  }
  .send {
    width: 15rem !important;
    font-size: 1rem;
    font-weight: 700;
  }
  </style>
  