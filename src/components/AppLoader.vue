<script>
import { store } from "../store.js"
export default{
    data(){
        return{
            store
        }
    }
}
</script>
<template lang="">

    <div class="loader">
        <div class="text">{{ store.app_title }}</div>
        <img src="../../public/Yu-Gi-Oh!.svg" alt="">
        <div class="text">Loading...</div>    
    </div>
</template>
<style lang ="scss" scoped>

/* HTML: <div class="loader"></div> */

.loader {
    top:50%;
    left: 50%;
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img{
        width: 100px;
        animation: rotation 2s infinite linear;
    }   
    @keyframes rotation {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(359deg);
        }
    }
    .text{
        margin: 30px 0px
    }
}
@keyframes l30 {
  100% {transform: rotate(-1turn)}
}
</style>