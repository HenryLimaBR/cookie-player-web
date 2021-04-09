import axios from 'axios';
import api from './api';

class Cover {
	canvas = null;
	ctx = null;
	url = null;

	getSmallAxis({ width, height }) {
		return height < width ? height : width;
	}

	async process(url) {
		if (this.url) URL.revokeObjectURL(this.url);
		const img = new Image();
		await new Promise((res, rej) => {
			img.addEventListener('load', res);
			img.src = api.cover(url);
		});
		const smallAxisRes = this.getSmallAxis(img);
		this.canvas.width = smallAxisRes;
		this.canvas.height = smallAxisRes;
		this.ctx.translate(-this.canvas.width * 0.25, 0);
		this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
		this.ctx.drawImage(img, 0, 0);
		this.url = this.canvas.toDataURL('image/jpeg', 1);
		return this.url;
	}

	init() {
		this.canvas = document.createElement('canvas');
		this.ctx = this.canvas.getContext('2d');
	}
}

export default new Cover();
