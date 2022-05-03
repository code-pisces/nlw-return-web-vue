<template>
  <header>
    <button type="button" class="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
      @click="widgetStore.handleRestartFeedback">
      <Ph-Arrow-Left weight="bold" class="w-4 h-4" />
    </button>
    <span class="text-xl leading-6 flex items-center gap-2">
      <img :src="feedbackTypeInfo.image.source" :alt="feedbackTypeInfo.image.alt" class="w-6 h-6">{{
          feedbackTypeInfo.title
      }}</span>

    <CloseButton />
  </header>

  <form class="my-4 w-full" @submit.prevent="handleSubmitFeedback">
    <textarea
      class="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 resize-none focus:outline-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
      placeholder="Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo..."
      v-model="widgetStore.comment" />

    <footer class="flex gap-2 mt-2">
      <ScreenshotButton />
      <button type="submit"
        class="p-2 bg-brand-500 rounded-sm border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-brand-500"
        :disabled="widgetStore.comment.length === 0">Enviar Feedback</button>
    </footer>
  </form>

</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import CloseButton from '@/components/CloseButton.vue'
import ScreenshotButton from '@/components/WidgetFormSteps/ScreenshotButton.vue'
import { useWidgetStore } from '@/stores/widgetStore'
import { FeedbackType } from '@/models/WidgetTypes'

const widgetStore = useWidgetStore()

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
}

const props = defineProps<FeedbackContentStepProps>()

const feedbackTypeInfo = widgetStore.feedbackTypes[props.feedbackType]

const handleSubmitFeedback = () => {
  console.log({
    comment: widgetStore.comment,
    screenshot: widgetStore.screenshot
  })
  widgetStore.feedbackSent = true
}
</script>
