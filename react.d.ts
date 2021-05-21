namespace RC {
  // Home Interfaces
  interface HomeProps {}
  interface HomeState {
    routerDest: string
    searchResults: yts.VideoSearchResult[]
    playingNow: string
  }
  type setRouterDest = (route: string) => void
  type setSearchResults = (data: yts.VideoSearchResult[]) => void
  type setPlayingNow = (id: string) => void
  // Content Interfaces
  interface ContentProps {
    routerDest: string
    searchResults: yts.VideoSearchResult[]
    setSearchResults: setSearchResults
    playingNow: string
    setPlayingNow: setPlayingNow
  }
  interface ContentState { }

  // Search Interfaces
  interface SearchProps {
    searchResults: yts.VideoSearchResult[]
    setSearchResults: setSearchResults
    playingNow: string
    setPlayingNow: setPlayingNow
  }
  interface SearchState { }

  // Item Interfaces
  interface ItemProps {
    info: yts.VideoSearchResult
    index: number
    playingNow: string
    setPlayingNow: setPlayingNow
  }
  interface ItemState { }

  // Control Interfaces
  interface ControlProps {
    setRouterDest: setRouterDest
  }
  interface ControlState { }

  // Router Interfaces
  interface RouterProps {
    routerDest: string
  }
  interface RouterState { }
}