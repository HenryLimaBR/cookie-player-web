import type yts from 'yt-search'

export = yts
export as namespace yts

declare global {
  interface Window {
    search: (search: string) => void
  }
}