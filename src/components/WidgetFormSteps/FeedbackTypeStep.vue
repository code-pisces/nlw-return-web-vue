<template>
    <header>
      <span class="text-xl leading-6">Deixe seu feedback</span>

      <CloseButton />
    </header>

  <div class="flex py-8 gap-2 w-full">
    <button v-for="([key, value]) in feedbackVetorUI" :key="key"
      class="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
      type="button" @click="widgetStore.feedbackType = key as FeedbackType">
      <img :src="value.image.source" :alt="value.image.alt">
      <span>{{ value.title }}</span>
    </button>
  </div>

</template>

<script setup lang="ts">
import CloseButton from '@/components/CloseButton.vue'

import { useWidgetStore } from '@/stores/widgetStore'
const widgetStore = useWidgetStore()

const feedbackVetorUI = Object.entries(widgetStore.feedbackTypes)

type FeedbackType = keyof typeof widgetStore.feedbackTypes;
</script>
