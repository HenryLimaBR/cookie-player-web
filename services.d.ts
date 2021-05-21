namespace Services {
  namespace Player {
    interface EventListener {
      event: keyof HTMLMediaElementEventMap
      listener: (this: HTMLAudioElement, ev: Event) => void
      options?: boolean | AddEventListenerOptions | undefined
    }
  }

  namespace Log {
    type CSS = {
      backgroundColor?: string
      color?: string
      size?: string | number
    }
  }
}