<template>
  <button type="button" v-if="widgetStore.screenshot"
    class="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
    :style="{ backgroundImage: `url(${widgetStore.screenshot})`, backgroundPosition: 'right bottom', backgroundSize: 180 }"
    @click="widgetStore.screenshot = null">
    <Ph-Trash weight="fill" />
  </button>
  <button v-else type="button"
    class="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none  focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
    @click="handleTakeScreenshot">
    <LoadingShow v-if="isTakingScreenshot" />
    <Ph-Camera v-else class="w-6 h-6 text-zinc-100" />
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import html2canvas from 'html2canvas'
import LoadingShow from '@/components/LoadingShow.vue'
import { useWidgetStore } from '@/stores/widgetStore'
const widgetStore = useWidgetStore()

const isTakingScreenshot = ref(false)
const handleTakeScreenshot = async () => {
  isTakingScreenshot.value = true
  const canvas = await html2canvas(document.querySelector('html')!)
  const base64image = canvas.toDataURL('image/png')
  widgetStore.screenshot = base64image
  isTakingScreenshot.value = false
}
</script>
