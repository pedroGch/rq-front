
<template>
  <div>
    <!-- <nav-app></nav-app> -->
    <nav class="w-screen h-[69px] bg-azul drop-shadow-xl flex items-center ">
      <a href="#" class="w-[32px] h-[32px] ml-[25px] flex items-center">
        <img src="../public/menu.png" alt="" class="w-[100%]">
      </a>
      <div class="flex justify-center w-[100%]">
        <img src="../public/logo.png" alt="">
      </div>
    </nav>
    <main class="container">
      <nombre-personaje></nombre-personaje>
      <info-general></info-general>
      <caracteristicas></caracteristicas>
      <habilidades></habilidades>
      <armas></armas>
      <magias></magias>
    </main>
  </div>
</template>

<script>
//import NavApp from "./components/NavApp.vue";
import NombrePersonaje from "./components/NombrePersonaje.vue";
import InfoGeneral from "./components/InfoGeneral.vue";
import Caracteristicas from "./components/Caracteristicas.vue";
import Habilidades from "./components/Habilidades.vue";
import Armas from "./components/Armas.vue";
import Magias from "./components/Magias.vue";

export default {
  components:{
    //NavApp,
    InfoGeneral,
    Caracteristicas,
    Habilidades,
    NombrePersonaje,
    Armas,
    Magias
  },
  data(){
    return{
      nombrePersonaje: "AKAZA",
    }
  }
}
</script>


