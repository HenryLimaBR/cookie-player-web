import log from './log'
class Player {
	private element: HTMLAudioElement | null = null
	private eventQueue: Services.Player.EventListener[] = new Array()
	private eventRegister: Services.Player.EventListener[] = new Array()
	private lastMedia: string = '00000000'

	get current() { return this.lastMedia }

	set src(src) { this.element!.src = src }
	get src() { return this.element!.src }

	async play(id?: string) {
		if (id) {
			this.lastMedia = id
		}
		await this.element!.play()
		return this.isPlaying
	}

	async pause() {
		await this.element!.pause()
		return this.isPlaying
	}

	async toggleState() {
		if (this.src !== '') {
			return this.element!.paused ? await this.play() : await this.pause()
		}
	}

	get isPlaying(): boolean {
		return !this.element!.paused
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
			log.colored(`Player: ${count} New Events Registered!`)
		}
	}

	createEvent({ event, listener }: Services.Player.EventListener) {
		this.eventQueue.push({ event, listener })
		log.colored(`Player: New Pending Event, Queued: ${this.eventQueue.length}.`)
		if (this.element) this.registerEvents()
	}

	init() {
		this.element = new Audio();
		log.colored('Player: Media Element Initialized')
		if (this.eventQueue.length > 0) this.registerEvents()
	}
}

export default new Player()
