<script>
export default {
    name: 'Card',
    props: {
        Cards: Object,
    },
    data() {
        return {

        }
    },
}
</script>

<template>
    <!-- COLONNA DA 20% -->
    <div class="my-col-20">
        <!-- CLASSE CARD DI BOOTSTRAP PER CONTENERE LE IMG DELLE CARD -->
        <div class="card">
            <!-- CICLO FOR PER CICLARE LE CARTE -->
            <img v-for="cardImg, index in Cards.card_images" :key="index" :src="cardImg.image_url" alt="">
            <!-- NOME CARTA RIPRESO DALL'ARRAY -->
            <h5>{{ Cards.name }}</h5>
            <!-- TIPOLOGIA CARTA RIPRESA DALL'ARRAY -->
            <h6>{{ Cards.archetype }}</h6>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/generals.scss' as *;
@use '../styles/partials/variables' as*;

/* STILE COLONNA */
.my-col-20{
    width: calc(100% / 5 - 20px);
    margin: $my_margin
}
/* AGGIUNTA STILI ALLA CLASSE CARD DI BOOTSTRAP */
.card {
    padding-bottom: $my_margin;
    text-align: center;
    background-color: $color_orange;
    height: 500px;
    /* SIILE h5 e h6 */
    h5 {
        font-size: 20px;
        margin: $my_margin;
        margin-top: 20px;
        color: white
    }

    h6 {
        font-size: 14px;
        margin-top: 20px
    }
}
</style>