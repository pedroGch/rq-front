
<template>
  <div>
    <nav class="w-screen h-[69px] bg-azul drop-shadow-xl flex items-center ">
      <a href="#" class="w-[32px] h-[32px] ml-[25px] flex items-center">
        <img src="../public/menu.png" alt="" class="w-[100%]">
      </a>
      <div class="flex justify-center w-[100%]">
        <img src="../public/logo.png" alt="">
      </div>
    </nav>


    <main class="container">
      <section class=" flex justify-center pt-[28px]">
        <span class="w-[264px] h-[98px] bg-encabezado bg-no-repeat flex items-center pt-[10px]">
          <h1 class="w-[100%] text-center align-center text-[20px] fondo-texto-verde">
            AKAZA
          </h1>
        </span>
      </section>

      <section class="w-[375px] mt-[28px] px-[27px] flex">
        <img class="w-[50%]" src="/pantalla_inicio_sesion.jpg" alt="">
        <ul class="w-[50%] ml-[10px]">
          <li class="mb-[5px] pl-[2px] bg-gray-400">Pto Magicos: 12</li>
          <li class="mb-[5px]">Pto Fatiga: 12</li>
          <li class="mb-[5px] pl-[2px] bg-gray-400">Pto Golpe: 12</li>
          <li class="mb-[5px]">MMR-CC: 12</li>
          <li class="mb-[5px] pl-[2px] bg-gray-400">MMR-TAM: 12</li>
          <li class="mb-[5px]">MMR-DES: 12</li>
          <li><button class="rounded-md w-[100%] bg-azul text-white text-center mt-[16px]" type="button">Ver más +</button></li>
        </ul>
      </section>

      <section class="mt-[28px]">
        <h2 class="fondo-texto-verde flex justify-center text-[18px]">Características</h2>

        <div class="mt-[28px] flex justify-center space-x-2">
          <div class="block w-[40px]">
            <spann class="block text-center font-bold">FUE</spann>
            <spann class="contenedor-input-caracteristica gradiente">
              <input type="text" maxlength="2" class="input-caracteriztica" disabled value="12"/>
            </spann>
          </div>
          <div class="block w-[40px]">
            <spann class="block text-center font-bold">CON</spann>
            <spann class="contenedor-input-caracteristica gradiente">
              <input type="text" maxlength="2" class="input-caracteriztica" disabled value="12"/>
            </spann>
          </div>
          <div class="block w-[40px]">
            <spann class="block text-center font-bold">TAM</spann>
            <spann class="contenedor-input-caracteristica gradiente">
              <input type="text" maxlength="2" class="input-caracteriztica" disabled value="12"/>
            </spann>
          </div>
          <div class="block w-[40px]">
            <spann class="block text-center font-bold">DES</spann>
            <spann class="contenedor-input-caracteristica gradiente">
              <input type="text" maxlength="2" class="input-caracteriztica" disabled value="12"/>
            </spann>
          </div>
          <div class="block w-[40px]">
            <spann class="block text-center font-bold">INT</spann>
            <spann class="contenedor-input-caracteristica gradiente">
              <input type="text" maxlength="2" class="input-caracteriztica" disabled value="12"/>
            </spann>
          </div>
          <div class="block w-[40px] ">
            <spann class="block text-center font-bold">POW</spann>
            <spann class="contenedor-input-caracteristica gradiente">
              <input type="text" maxlength="2" class="input-caracteriztica" disabled value="12"/>
            </spann>
          </div>
          <div class="block w-[40px]">
            <spann class="block text-center font-bold">CAR</spann>
            <spann class="contenedor-input-caracteristica gradiente">
              <input type="text" maxlength="2" class="input-caracteriztica" disabled value="12"/>
            </spann>
          </div>
        </div>
      </section>
      <section class="mt-[28px] px-[27px]">
        <div class="mt-[28px]">
          <button class="w-full flex justify-between items-center py-2 px-4 bg-gray-200 rounded-md focus:outline-none focus:bg-gray-300" @click="toggleAccordion()">
            <span class="text-black">Habilidades</span>
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          <ul class="hidden mt-2"  id="accordionContent">
            <li>Elemento 1</li>
            <li>Elemento 2</li>
            <li>Elemento 3</li>
            <!-- Agrega más elementos si es necesario -->
          </ul>
        </div>

      </section>
    </main>
  </div>
</template>

<script>
export default {
  methods: {
    toggleAccordion(){
      const accordionContent = document.getElementById('accordionContent');
      accordionContent.classList.toggle('hidden');
    }
  },
}
</script>

