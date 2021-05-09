class Player {
	private element: HTMLAudioElement | null = null
	private eventQueue: FE.SV.Player.event[] = new Array()
	private eventRegister: FE.SV.Player.event[] = new Array()

	set src(src) { this.element!.src = src }
	get src() { return this.element!.src }

	async play() {
	  await this.element!.play()
	}

	async pause() { await this.element!.pause() }

	async toggleState() {
		if (this.src !== '') return this.element!.paused ? await this.play() : await this.pause()
	}

	private registerEvents() {
		if (this.eventQueue.length > 0) {
			let count = 0
			this.eventQueue.forEach((e) => {
				if (!this.eventRegister.includes(e)) {
					this.element!.addEventListener(e.event, e.dest)
					this.eventRegister.push(e)
					count++
				}
			})
			this.eventQueue.splice(0, this.eventQueue.length)
			console.log(`Player: ${count} New Events Registered!`)
		}
	}

	createEvent({ event, dest }: FE.SV.Player.event) {
		this.eventQueue.push({ event, dest })
		console.log(`Player: New Pending Event, Queued: ${this.eventQueue.length}.`)
		if (this.element) this.registerEvents()
	}

	init() {
		this.element = new Audio();
		console.log('Player: Media Element Initialized')
		if (this.eventQueue.length > 0) this.registerEvents()
	}
}

export default new Player()
