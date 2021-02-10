import axios from 'axios';

export default async function squary(url) {
	if (!window.sqr) createSquary();
	if (window.sqr &&window.sqr.url) window.URL.revokeObjectURL(window.sqr.url);

	const img = new Image();
	await new Promise((res, rej) => {
		img.addEventListener('load', res);
		img.src = `/api/album?i=${url}`;
	});

	const { canvas, ctx } = window.sqr;
	const res = getImageRes(img);
	canvas.width = res;
	canvas.height = res;

	ctx.translate(-canvas.width * 0.25, 0);
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	ctx.drawImage(img, 0, 0);

	window.sqr.url = canvas.toDataURL('image/jpeg');

	return window.sqr.url;
}

function createSquary() {
	window.sqr = {
		canvas: null,
		ctx: null,
		url: null
	};
	window.sqr.canvas = document.createElement('canvas');
	window.sqr.ctx = window.sqr.canvas.getContext('2d');
}

function getImageRes({ width, height}) {
	return height < width ? height : width;
}
