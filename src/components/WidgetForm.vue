<template>
  <div
    class="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

    <FeedbackTypeStep v-if="!widgetStore.feedbackType"/>
    <FeedbackSuccessStep v-else-if="widgetStore.feedbackSent"/>
    <FeedbackContentStep :feedbackType="widgetStore.feedbackType" v-else/>

    <footer class="text-xs text-neutral-400">
      Feito com ♥ pela <a class="underline underline-offset-2" href="https://rocketseat.com.br">Rocketseat</a>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { useWidgetStore } from '@/stores/widgetStore'
import FeedbackTypeStep from '@/components/WidgetFormSteps/FeedbackTypeStep.vue'
import FeedbackContentStep from '@/components/WidgetFormSteps/FeedbackContentStep.vue'
import FeedbackSuccessStep from '@/components/WidgetFormSteps/FeedbackSuccessStep.vue'
const widgetStore = useWidgetStore()
</script>
