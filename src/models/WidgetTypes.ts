import { useWidgetStore } from '@/stores/widgetStore'
const widgetStore = useWidgetStore()
export type FeedbackType = keyof typeof widgetStore.feedbackTypes;
