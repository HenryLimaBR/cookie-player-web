import cover from './cover';

export default async function setMediaInfo (data) {
		const albumImage = await cover(data.thumbnail);
		if ('mediaSession' in navigator) navigator.mediaSession.metadata = new MediaMetadata({
			title: data.title,
			artist: 'Work In Progress',
			album: 'Work In Progress',
			artwork: [{ src: albumImage }]
		});
	}
