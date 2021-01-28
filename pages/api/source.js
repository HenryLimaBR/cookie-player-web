import ytdl from 'ytdl';

export default async function source(req, res) {
	const { id } = req.query;
	return id && id.length > 0 ? (await ytdl.getInfo(id)).formats : res.json({ error: true });
}
