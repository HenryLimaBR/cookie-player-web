import axios, { Canceler } from 'axios'
import type yts from 'yt-search'
import type ytdl from 'ytdl-core'

class Api {
	private baseURL = ''
	private audioCancel: Canceler | null = null

	constructor(baseURL = '') {
		this.baseURL = baseURL.charAt(baseURL.length - 1) === '/' ? baseURL.slice(0, baseURL.length - 1) : baseURL
	}

	public async search(q: string) {
		return (await axios.get(`${this.baseURL}/api/search?q=${q}`)).data as yts.VideoSearchResult[]
	}

	public async audio(id: string) {
		if (this.audioCancel !== null) {
			this.audioCancel()
		}
		try {
			const response = await axios.get(`${this.baseURL}/api/audio?id=${id}`, {
				cancelToken: new axios.CancelToken(e => {
					this.audioCancel = e
				})
			})
			this.audioCancel = null
			return response.data as ytdl.videoFormat[]
		} catch (err) {
			return 'Audio Request was Canceled or Caught on Error'
		}
	}

	public cover(url: string) { return `${this.baseURL}/api/image?i=${url}` }
}


export default new Api('/')
