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
            <div> 
              <h3 class="text-center tex-bold bg-blue-300 p-0">Agilidad (10)</h3>
              <table class="min-w-full divide-y divide-gray-200">
                <tbody class="p-2 bg-white divide-y divide-gray-200">
                  <!-- Fila 1 -->
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap">Arrojar</td>
                    <td class="px-6 py-4 whitespace-nowrap">25</td>                        
                    <td class="px-6 py-4 whitespace-nowrap">
                      <input type="checkbox">
                    </td>
                  </tr>

                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap">Esquivar</td>
                    <td class="px-6 py-4 whitespace-nowrap">5</td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <input type="checkbox">
                    </td>
                  </tr>

                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap">Montar</td>
                    <td class="px-6 py-4 whitespace-nowrap">5</td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <input type="checkbox">
                    </td>
                  </tr>

                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap">Nadar</td>
                    <td class="px-6 py-4 whitespace-nowrap">5</td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <input type="checkbox">
                    </td>
                  </tr>

                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap">Remar</td>
                    <td class="px-6 py-4 whitespace-nowrap">5</td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <input type="checkbox">
                    </td>
                  </tr>

                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap">Saltar</td>
                    <td class="px-6 py-4 whitespace-nowrap">5</td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <input type="checkbox">
                    </td>
                  </tr>

                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap">Trepar</td>
                    <td class="px-6 py-4 whitespace-nowrap">40</td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <input type="checkbox">
                    </td>
                  </tr>

                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap">Usar velero</td>
                    <td class="px-6 py-4 whitespace-nowrap">5</td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <input type="checkbox">
                    </td>
                  </tr>
                </tbody>
              </table>                
            </div>
          </div>
          <div class="flex-shrink-0 flex-grow-0 w-full scroll-snap-align-center">
            <div> 
              <h3 class="text-center tex-bold bg-blue-300 p-0">Comunicación (10)</h3>
              <table class="min-w-full divide-y divide-gray-200">
                <tbody class="p-2 bg-white divide-y divide-gray-200">
                  <!-- Fila 1 -->
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap">Actuar</td>
                    <td class="px-6 py-4 whitespace-nowrap">5</td>                        
                    <td class="px-6 py-4 whitespace-nowrap">
                      <input type="checkbox">
                    </td>
                  </tr>

                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap">Cantar</td>
                    <td class="px-6 py-4 whitespace-nowrap">5</td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <input type="checkbox">
                    </td>
                  </tr>

                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap">Habla fluida</td>
                    <td class="px-6 py-4 whitespace-nowrap">5</td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <input type="checkbox">
                    </td>
                  </tr>

                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap">Idioma propio</td>
                    <td class="px-6 py-4 whitespace-nowrap">30</td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <input type="checkbox">
                    </td>
                  </tr>

                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap">Oratoria</td>
                    <td class="px-6 py-4 whitespace-nowrap">5</td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <input type="checkbox">
                    </td>
                  </tr>

                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap">Regatear</td>
                    <td class="px-6 py-4 whitespace-nowrap">5</td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <input type="checkbox">
                    </td>
                  </tr>

                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap">Seducción</td>
                    <td class="px-6 py-4 whitespace-nowrap">5</td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <input type="checkbox">
                    </td>
                  </tr>
                </tbody>
              </table>                
            </div>
          </div>
        </div>
        
      </div>
    </div>

  </section>
</template>
<script>
export default {
  methods: {
    toggleAccordion(){
      const accordionContent = document.getElementById('accordionContent');
      accordionContent.classList.toggle('hidden');
    }
  }
}
</script>