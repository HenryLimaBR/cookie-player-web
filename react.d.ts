namespace RC {
  type setRouterDest = (route: string) => void
  type setSearchResults = (data: searchResults) => void
  type searchResults = yts.VideoSearchResult[]
  type setPlayingNow = (item: yts.VideoSearchResult) => void
  type playingNow = yts.VideoSearchResult
  
  // Home Interfaces
  interface HomeProps { }
  interface HomeState {
    routerDest: string
    searchResults: searchResults
    playingNow: playingNow
  }
  // Content Interfaces
  interface ContentProps {
    routerDest: string
    searchResults: searchResults
    setSearchResults: setSearchResults
    playingNow: playingNow
    setPlayingNow: setPlayingNow
  }

  // Search Interfaces
  interface SearchProps {
    searchResults: searchResults
    setSearchResults: setSearchResults
    playingNow: playingNow
    setPlayingNow: setPlayingNow
  }

  // Item Interfaces
  interface ItemProps {
    info: yts.VideoSearchResult
    index: number
    playingNow: playingNow
    setPlayingNow: setPlayingNow
  }
  interface ItemState {
    isCurrentPlaying: boolean
  }

  // Control Interfaces
  interface ControlProps {
    setRouterDest: setRouterDest
  }

  // Router Interfaces
  interface RouterProps {
    routerDest: string
  }
}