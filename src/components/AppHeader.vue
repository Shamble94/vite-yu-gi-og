<script>
export default{
    name: "AppHeader"
}
</script>

<template lang="">
    <!-- DIV DI ALLINEAMENTO TESTO / IMMAGINE -->
    <div class="text-allineato">
        <!-- LOGO -->
        <img src="/Yu-Gi-Oh!.svg" alt="">
        <!-- NOME ESERCIZIO -->
        <h4> Yu-Gi-Oh! API</h4>
    </div>
    </template>

<style lang ="scss" scoped>
/* STILE LOGO */
img{
    width: 100px;
    margin: 2px;
}
/* STILE HEADER */
.text-allineato{
    display: flex;
    align-items: center;
    margin: 18px;
    text-transform: uppercase;
}
</style>