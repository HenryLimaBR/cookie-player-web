import axios from 'axios';

const cover = { canvas: null, ctx: null, url: null };

export default async function getCover(url) {
	if (!cover.canvas) init();
	if (cover.url) URL.revokeObjectURL(cover.url);

	const img = new Image();
	await new Promise((res, rej) => {
		img.addEventListener('load', res);
		img.src = `/api/album?i=${url}`;
	});

	const { canvas, ctx } = cover;
	const res = getSmallBounds(img);
	canvas.width = res;
	canvas.height = res;

	ctx.translate(-canvas.width * 0.25, 0);
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	ctx.drawImage(img, 0, 0);

	cover.url = canvas.toDataURL('image/jpeg');

	return cover.url;
}

export function init() {
	cover.canvas = document.createElement('canvas');
  cover.ctx = cover.canvas.getContext('2d');
}

export function getSmallBounds({ width, height}) {
	return height < width ? height : width;
}

export function readCover() {
	return cover.url;
}
