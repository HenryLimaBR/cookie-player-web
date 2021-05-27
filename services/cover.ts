import api from './api'

class Cover {
	private canvas: HTMLCanvasElement | null = null
	private ctx: CanvasRenderingContext2D | null = null
	private url = ''

	getSmallAxis({ width, height }: HTMLImageElement) {
		return height < width ? height : width
	}

	async process(url: string) {
		if (this.url) URL.revokeObjectURL(this.url)
		const img = new Image()
		await new Promise((res, rej) => {
			img.addEventListener('load', res)
			img.src = api.cover(url)
		});
		const smallAxisRes = this.getSmallAxis(img)
		this.canvas!.width = smallAxisRes
		this.canvas!.height = smallAxisRes
		this.ctx!.translate(-(img.width - this.canvas!.width) / 2, 0)
		this.ctx!.fillRect(0, 0, this.canvas!.width, this.canvas!.height)
		this.ctx!.drawImage(img, 0, 0)
		this.url = this.canvas!.toDataURL('image/jpeg', 1)
		return this.url
	}

	init() {
		this.canvas = document.createElement('canvas')
		this.ctx = this.canvas.getContext('2d')
	}
}

export default new Cover()
