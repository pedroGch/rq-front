<template>
  <section class="mt-[28px] px-[27px]">
    <div class="mt-[28px]">
      <button class="w-full flex justify-between items-center py-2 px-4 bg-gray-200 rounded-md focus:outline-none focus:bg-gray-300" @click="toggleAccordion()">
        <span class="text-black">Habilidades</span>
        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      <div class="hidden mt-2"  id="accordionContent">
        <div class="flex overflow-x-scroll w-full scroll-snap-type-x-mandatory scroll-padding-24 border rounded-8 gap-12">
          <div class="flex-shrink-0 flex-grow-0 w-full scroll-snap-align-center">
            <habilidade-agilidad></habilidade-agilidad>
          </div>

          <div class="flex-shrink-0 flex-grow-0 w-full scroll-snap-align-center">
            <habilidad-comunicacion></habilidad-comunicacion>
          </div>

          <div class="flex-shrink-0 flex-grow-0 w-full scroll-snap-align-center">
            <habilidad-conocimiento></habilidad-conocimiento>
          </div>

          <div class="flex-shrink-0 flex-grow-0 w-full scroll-snap-align-center">
            <habilidad-manipulacion></habilidad-manipulacion>
          </div>

          <div class="flex-shrink-0 flex-grow-0 w-full scroll-snap-align-center">
            <habilidad-percepcion></habilidad-percepcion>
          </div>

          <div class="flex-shrink-0 flex-grow-0 w-full scroll-snap-align-center">
            <habilidad-sigilo></habilidad-sigilo>
          </div>
        </div>
        
      </div>
    </div>

  </section>
</template>
<script>
import HabilidadAgilidad from './habilidades/HabilidadAgilidad.vue';
import HabilidadComunicacion from './habilidades/HabilidadComunicacion.vue';
import HabilidadConocimiento from './habilidades/HabilidadConocimiento.vue';
import HabilidadManipulacion from './habilidades/HabilidadManipulacion.vue';
import HabilidadPercepcion from './habilidades/HabilidadPercepcion.vue';
import HabilidadSigilo from './habilidades/HabilidadSigilo.vue';
export default {
  components:{
    HabilidadAgilidad,
    HabilidadComunicacion,
    HabilidadConocimiento,
    HabilidadManipulacion,
    HabilidadPercepcion,
    HabilidadSigilo

  },
  methods: {
    toggleAccordion(){
      const accordionContent = document.getElementById('accordionContent');
      accordionContent.classList.toggle('hidden');
    }
  }
}
</script>