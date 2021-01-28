//import ytdl from 'ytdl';
import ytdl from '../../ytdl-fix/index.js'; // Temporary Fix For YTDL

export default async function source(req, res) {
	const { id } = req.query;
	return id && id.length > 0 ? res.json((await ytdl.getInfo(id)).formats) : res.json({ error: true });
}
