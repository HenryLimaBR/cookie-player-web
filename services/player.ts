import log from './log'
class Player {
	private element: HTMLAudioElement | null = null
	private eventQueue: Services.Player.EventListener[] = new Array()
	private eventRegister: Services.Player.EventListener[] = new Array()

	set src(src) { this.element!.src = src }
	get src() { return this.element!.src }

	async play() {
		await this.element!.play()
	}

	async pause() { await this.element!.pause() }

	async toggleState() {
		if (this.src !== '') {
			return this.element!.paused ? await this.play() : await this.pause()
		}
	}

	get volume() {
		return this.element!.volume
	}

	set volume(volume: number) {
		if (this.element!.volume > 0 && this.element!.volume < 100) {
			this.element!.volume = volume / 100
		}
	}

	private registerEvents() {
		if (this.eventQueue.length > 0) {
			let count = 0
			this.eventQueue.forEach((e) => {
				if (!this.eventRegister.includes(e)) {
					this.element!.addEventListener(e.event, e.listener, e.options)
					this.eventRegister.push(e)
					count++
				}
			})
			this.eventQueue.splice(0, this.eventQueue.length)
			log.c(`Player: ${count} New Events Registered!`, { size: 12 })
		}
	}

	createEvent({ event, listener }: Services.Player.EventListener) {
		this.eventQueue.push({ event, listener })
		log.c(`Player: New Pending Event, Queued: ${this.eventQueue.length}.`, { size: 12 })
		if (this.element) this.registerEvents()
	}

	init() {
		this.element = new Audio();
		log.c('Player: Media Element Initialized', { size: 12 })
		if (this.eventQueue.length > 0) this.registerEvents()
	}
}

export default new Player()
