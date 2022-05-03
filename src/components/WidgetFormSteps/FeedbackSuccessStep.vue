<template>
  <header>
    <CloseButton />
  </header>

  <div class="flex flex-col items-center py-10 w-[304px]">
    <img :src="SuccessIcon" alt="Sucesso">
    <span class="text-xl mt-2">Agradecemos o feeedback!</span>

    <button type="button"
      class="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-brand-500"
      @click="widgetStore.handleRestartFeedback">
      Quero enviar outro
    </button>
  </div>
</template>

<script setup lang="ts">
import { useWidgetStore } from '@/stores/widgetStore'
import CloseButton from '@/components/CloseButton.vue'
import SuccessIcon from '@/assets/img/success.svg'
const widgetStore = useWidgetStore()
</script>
