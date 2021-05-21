class Playlist {
	musicList = Array()
	lastListenedMusic = 0;

	info = {
		name: '',
		desc: 'A Common Playlist!',
		playlistCover: '/res/img/icon@2x.png',
		isDBSync: false,
		createdBy: 'Cookie Player User',
		createdAt: new Date(),
		totalTime: 0,
		listenedAt: null
	};

	constructor(data: { name: string, desc: string }) {

	}
}

export default Playlist
