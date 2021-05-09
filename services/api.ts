import axios from 'axios'
import type yts from 'yt-search'
import type ytdl from 'ytdl-core'

class Api {
	baseURL = ''

	constructor(baseURL = '') {
		this.baseURL = baseURL.charAt(baseURL.length - 1) === '/' ? baseURL.slice(0, baseURL.length - 1) : baseURL
	}

	async search(q: string) {
		return (await axios.get(`${this.baseURL}/api/search?q=${q}`)).data as yts.SearchResult
	}

	async audio(id: string) {
		return (await axios.get(`${this.baseURL}/api/audio?id=${id}`)).data as ytdl.videoInfo
	}

	cover(url: string) { return `${this.baseURL}/api/album?i=${url}` }
}


export default new Api('/')
