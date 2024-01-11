<script>
import { store } from '../store.js';

export default {
    data() {
        return {
            store,
        }
    },
    /* METODO PER IL NUMERO DELLE CARTE */
    computed: {
        NumberCards() {
            return store.cardList.length;
        }
    }
}
</script>
<template>
    <div>
        <!-- H4 PER VISUALIZZARE IL NUMERO DELLE CARTE TROVATE -->
        <h4 class="mx-5">Numero carte trovate : {{ NumberCards }}</h4>
    </div>
</template>
<style lang="scss">
</style>