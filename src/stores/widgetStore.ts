import { defineStore } from 'pinia'
import bugImageUrl from '@/assets/img/bug.svg'
import ideaImageUrl from '@/assets/img/idea.svg'
import thoughtImageUrl from '@/assets/img/thought.svg'

interface State {
  feedbackType: null
  comment: string
  screenshot: string | null
  feedbackSent: boolean
}

export const useWidgetStore = defineStore('widget', {
  state: () => ({
    feedbackType: null,
    comment: '',
    screenshot: null,
    feedbackSent: false
  }) as State,
  actions: {
    handleRestartFeedback () {
      this.feedbackSent = false
      this.feedbackType = null
    }
  },
  getters: {
    feedbackTypes () {
      return {
        BUG: {
          title: 'Problema',
          image: {
            source: bugImageUrl,
            alt: 'Imagem de um inseto'
          }
        },
        IDEA: {
          title: 'Ideia',
          image: {
            source: ideaImageUrl,
            alt: 'Imagem de uma lâmpada'
          }
        },
        OTHER: {
          title: 'Outro',
          image: {
            source: thoughtImageUrl,
            alt: 'Imagem de um balão de pensamento'
          }
        }
      }
    }
  }
})
