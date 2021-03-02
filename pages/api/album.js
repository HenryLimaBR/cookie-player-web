import axios from 'axios';

export default async function album(req, res) {
	const { i } = req.query;
	if (i && i.length > 0 ) {
		const img = await axios(i, { responseType: 'arraybuffer' });
		res.setHeader('Content-Type', img.headers['content-type']);
		res.setHeader('Content-Length', img.data.length)
		res.status(200).end(img.data);
	} else {
		return res.json({ error: true });
	}
}

