
<template>
  <div>
    <nav-app></nav-app>
    <main class="container">
      <nombre-personaje></nombre-personaje>
      <info-general></info-general>
      <caracteristicas></caracteristicas>
      <habilidades></habilidades>
    </main>
  </div>
</template>

<script>
import NavApp from "./components/NavApp.vue";
import NombrePersonaje from "./components/NombrePersonaje.vue";
import InfoGeneral from "./components/InfoGeneral.vue";
import Caracteristicas from "./components/Caracteristicas.vue";
import Habilidades from "./components/Habilidades.vue";

export default {
  components:{
    NavApp,
    InfoGeneral,
    Caracteristicas,
    Habilidades,
    NombrePersonaje
  },
  data(){
    return{
      nombrePersonaje: "AKAZA",
    }
  }
}
</script>


