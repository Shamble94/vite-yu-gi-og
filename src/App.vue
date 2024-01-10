<script>
/* IMPORTO AXIOS  */
import axios from "axios";
/* IMPORTO LE COMPONENTI */
import AppHeader from "./components/AppHeader.vue"
import CardList from "./components/CardList.vue"
/* IMPORTO STORE */
import { store } from "./store.js"
export default{
  /* RICHIAMO COMPONENTI PER UTILIZZARLE */
    components: {
      AppHeader,
      CardList
    },
    data(){
      return{
        store
      }
    },
    /* FUNZIUNE TRAMITE AXIOS RECUPERO I DATI DALL'ENDPOINT */
    methods: {
      getCardList(){
        axios.get(store.endpoint).then((response) => {
          store.cardList = response.data.data
        })
      }
    },
    /* RICHIAMO FUNZIONE AL CARICAMENTO DELLA PAGINA */
    created(){
      this.getCardList();
    }
}
</script>
<template lang="">
  <div>
    <AppHeader />
    <CardList />
  </div>
</template>
<style lang ="scss">
@use "./styles/generals.scss";
</style>