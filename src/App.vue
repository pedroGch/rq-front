
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
      <section class="mt-[28px]">
        <h2 class="fondo-texto-verde flex justify-center text-[18px]">Características</h2>
        <div class="flex space-x-4 justify-center mt-[28px]">
          <span>Puntos de golpes: 12</span>
          <span>Puntos de magia: 12</span>
        </div>

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
          <div class="block w-[40px]">
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
    </main>
  </div>
</template>

