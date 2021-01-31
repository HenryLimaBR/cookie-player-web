import yts from 'yt-search';

export default async function search(req, res) {
	const { q } = req.query;
	if (q && q.length > 0) {
		const data = (await yts(q)).all;
		return res.json(data.filter(i => {
			if (i.type === 'video') return i;
		}));
	} else {
		return res.json({
			error: true,
			message: 'Your Search Is Empty'
		});
  }
}
