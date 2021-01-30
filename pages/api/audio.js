//import ytdl from 'ytdl';
import ytdl from '../../ytdl-fix/index.js'; // Temporary Fix For YTDL

function filter({ formats }) {
	return formats.filter(s => { if (s.hasAudio && !s.hasVideo) return s });
}

export default async function source(req, res) {
	const { id } = req.query;
	return id && id.length > 0 ? res.json(filter(await ytdl.getInfo(id))) : res.json({ error: true });
}
