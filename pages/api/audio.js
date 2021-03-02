//import ytdl from 'ytdl';
import ytdl from '../../ytdl-fix/index.js'; // Temporary Fix For YTDL

export default async function source(req, res) {
	const { id } = req.query;
	if (id && id.length > 0) {
		const info = await ytdl.getInfo(id);
		const hqaudio = ytdl.chooseFormat(info.formats, {
			quality: 'highestaudio',
			filter: 'audioonly'
		});
		return res.json([hqaudio]);
	} else {
		res.json({ error: true });
	}
}
