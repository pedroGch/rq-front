<template>
  <section class="mt-[28px] px-[27px]">
    <div class="mt-[28px]">
      <button class="w-full flex justify-between items-center py-2 px-4 bg-gray-200 rounded-md focus:outline-none focus:bg-gray-300" @click="toggleAccordion()">
        <span class="text-black">Habilidades Mágicas</span>
        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      <div class="hidden mt-2"  id="accordionContent">

        
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