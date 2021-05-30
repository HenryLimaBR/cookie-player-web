import type yts from 'yt-search'
import cover from './cover'

class Media {
	private parser(title: string) {
		const separatedTitle = title.split(/-|~/)
		const author = separatedTitle.splice(0, 1).join('-').trim()
		const track = separatedTitle.join('').trim()
		return {
			author,
			track
		}
	}

	async set(data: yts.VideoSearchResult | yts.VideoMetadataResult) {
		const trackImg = await cover.process(data.thumbnail)
		const trackInfo = this.parser(data.title)
		if ('mediaSession' in navigator) {
			navigator.mediaSession!.metadata = new MediaMetadata({
				title: trackInfo.track,
				artist: trackInfo.author,
				//album: '',
				artwork: [
					{ src: trackImg }
				]
			});
		}
	}
}

export default new Media()
