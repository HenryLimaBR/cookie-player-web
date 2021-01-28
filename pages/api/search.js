import yts from 'yt-search';

export default function search(req, res) {
	const { q } = req.query;
	return q && q.length > 0 ? res.json((await yts(q)).all) : res.json({ error: true });
}
