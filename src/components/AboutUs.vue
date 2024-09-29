<template>
    <div class="about-us">
      <div class="content">
        <h3>Funny Catering</h3>
        <p>
          Coltiviamo con cura e professionalità ogni dettaglio per rendere unici i vostri eventi. Negli anni abbiamo sempre risposto ai nostri clienti con le migliori soluzioni di Catering e Banqueting, garantendo un servizio impeccabile con al centro competenza e disponibilità. Dal menù alla scelta della location, vi accompagniamo ad ogni passo.        </p>
      </div>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style lang="scss" scoped>
  .about-us {
    background-color: #f7e6ca;
    padding: 1.5rem 1rem;

    @media (min-width: 1200px) {
        padding: 5rem 2rem;
    }
  
    .content {
      max-width: 1400px;
      width: 100%;
      margin: 0 auto;
      text-align: center;
  
      h3 {
        margin-bottom: 1rem;
        color: black;
        font-size: 1.2rem;
        font-weight: bold;
        text-transform: uppercase;

        @media (min-width: 1200px) {
          font-size: 2rem;
        }
      }
  
      p {
        color: black;
        font-size: 1.1rem;
        line-height: 1.6;
        margin: 0 auto;
        max-width: 1125px;
        
        @media (min-width: 1200px) {
            line-height: 3.5rem;
            font-size: 1.5rem;
        }
      }
    }
  }
  </style>
  