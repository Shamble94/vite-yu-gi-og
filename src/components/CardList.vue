<script>
/* IMPORT CARD.VUE E STORE DALLO STATE MANAGEMENT */
import Card from "./Card.vue"
import { store } from "../store.js"
export default{
    name: "CardList",
    components: {
      Card
    },
    data(){
      return{
        /* RICHIAMO LO STORE PER POTERLO UTILIZZARE */
        store
      }
    }
  
}
</script>
<template lang="">
  <div>
    <body>
      <!-- CONTAINER -->
      <div class="container">
        <!--  CONTENITORE DELLE CARD -->
        <div class="container-cards">
          <Card v-for="Cards, index in store.cardList" :key="index" :Cards="Cards" />
        </div>
      </div>

      
    </body>

  </div>
</template>
<style lang ="scss" scoped>
@use '../styles/generals.scss' as *;
@use '../styles/partials/variables' as*;

/* COLORE DI SFONDO ARANCIONE */
body{
    background-color: $color_orange;
    margin: 0;
}
/* STILE DEL CONTAINER DELLE CARD */
.container-cards{
    background-color: $color_white;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
</style>

