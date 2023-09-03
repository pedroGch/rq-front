
<template>
  <div>
    <nav-app></nav-app>
    <section class=" flex justify-center pt-[28px]">
      <span class="w-[264px] h-[98px] bg-encabezado bg-no-repeat flex items-center pt-[10px]">
        <h1 class="w-[100%] text-center align-center text-[20px] fondo-texto-verde">
          {{ nombrePersonaje }}
        </h1>
      </span>
    </section>

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
import NavApp from "./components/NavApp.vue";
import InfoGeneral from "./components/InfoGeneral.vue";
import Caracteristicas from "./components/Caracteristicas.vue";
import Habilidades from "./components/Habilidades.vue";
import Armas from "./components/Armas.vue";
import Magias from "./components/Magias.vue";

export default {
  components:{
    NavApp,
    InfoGeneral,
    Caracteristicas,
    Habilidades,
    Armas,
    Magias
  },
  data(){
    return{
      nombrePersonaje: "AKAZA",
    }
  },
  mounted(){
    
  }
}
</script>


