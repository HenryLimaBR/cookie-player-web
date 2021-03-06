import cover from './cover';

class Media {
	async set(data) {
		const trackImg = await cover.process(data.thumbnail);
		if ('mediaSession' in navigator) {
			navigator.mediaSession.metadata = new MediaMetadata({
				title: data.title,
				//artist: '',
				//album: '',
				artwork: [
					{ src: trackImg }
				]
			});
		}
	}
}

export default new Media();
