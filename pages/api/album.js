import { loadImage, createCanvas } from 'canvas'; 

export default async function album(req, res) {
	const { i } = req.query;
	if (i && i.length > 0 ) {
		const img = await processImage(i);
		res.setHeader('Content-Type', 'image/jpeg');
		res.setHeader('Content-Length', img.length);
		res.status(200).end(img);
	} else {
		return res.json({ error: true });
	}
}

async function processImage(url) {
	const img = await loadImage(url);
	const res = getLowerRes(img); //Full image element should be inserted.
	const canvas = createCanvas(res, res);
	const ctx = canvas.getContext('2d');
	ctx.translate(-canvas.width * 0.25, 0);
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	ctx.drawImage(img, 0, 0);

	return await canvas.toBuffer('image/jpeg');
}

function getLowerRes({ width, height }) {
	return height < width ? height : width;
}

// processImage('https://i.ytimg.com/vi/Xw6k6Ma0oqo/hq720.jpg');

// const raw = await axios(i, { responseType: 'arraybuffer' });
