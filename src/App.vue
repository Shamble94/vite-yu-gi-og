<script>
/* IMPORTO AXIOS  */
import axios from "axios";
/* IMPORTO LE COMPONENTI */
import AppHeader from "./components/AppHeader.vue"
import CardList from "./components/CardList.vue"
import AppLoader from "./components/AppLoader.vue"
import CardCounter from "./components/CardCounter.vue"
import AppSearch from "./components/AppSearch.vue"
/* IMPORTO STORE */
import { store } from "./store.js"
export default{
  /* RICHIAMO COMPONENTI PER UTILIZZARLE */
    components: {
      AppHeader,
      CardList,
      AppLoader,
      AppSearch,
      CardCounter
    },
    data(){
      return{
        store
      }
    },
 
    /* FUNZIUNE TRAMITE AXIOS RECUPERO I DATI DALL'ENDPOINT */
    methods: {
      getCardList(){
       /*  axios.get(store.endpoint).then((response) => {
          store.cardList = response.data.data
          store.loading = false; */
          let apiUrl = store.endpoint
            if (store.search != ""){ 
              apiUrl = `https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=${store.search}&num=20&offset=0`
              console.log(apiUrl)
            }
            
            axios.get(apiUrl).then((response) => {
            
              store.loading = true;
              store.cardList = response.data.data
              store.loading = false
              console.log(this.store.cardList)
            })
            
          },
        
      SearchList(){
        
        axios.get(store.endpoint_archetype).then((response) => {
          store.archeList = response.data
        })
      }
    },

    /* RICHIAMO FUNZIONE AL CARICAMENTO DELLA PAGINA */
    created(){
      this.getCardList();
      this.SearchList()
     
    }
  }

</script>
<template lang="">
  <div>
    <AppLoader v-if="store.loading"/>
    <AppHeader :title="store.app_title" />
    <AppSearch @SearchArchetype ="getCardList" />
    <CardCounter />
    <CardList />
  </div>
</template>
<style lang ="scss">
@use "./styles/generals.scss";
</style>