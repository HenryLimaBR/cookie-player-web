import axios from 'axios'
import type yts from 'yt-search'
import type ytdl from 'ytdl-core'

class Api {
	baseURL = ''

	constructor(baseURL = '') {
		this.baseURL = baseURL.charAt(baseURL.length - 1) === '/' ? baseURL.slice(0, baseURL.length - 1) : baseURL
	}

	async search(q: string) {
		return (await axios.get(`${this.baseURL}/api/search?q=${q}`)).data as yts.VideoSearchResult[]
	}

	async audio(id: string) {
		return (await axios.get(`${this.baseURL}/api/audio?id=${id}`)).data as ytdl.videoFormat[]
	}

	cover(url: string) { return `${this.baseURL}/api/album?i=${url}` }

	async suggested() { return (await axios.get('https://gist.githubusercontent.com/HenryLimaBR/a7f84c4feae0f4f2f290499c16762de6/raw/93f456843b433a2883fdfd6b50e632fad76e4835/suggested.json')).data as yts.VideoSearchResult[] }
}


export default new Api('/')
