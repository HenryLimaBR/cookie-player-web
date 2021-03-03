class Player {
	me = null;
	eventQueue = new Array();
	eventRegister = new Array();

	set src(src) { this.me.src = src }
	get src() { return this.me.src }

	async play() { await this.me.play() }
	async pause() { await this.me.pause() }

	async toggleState() {
		if (this.src !== '') return this.me.paused ? await this.play() : await this.pause();
	}

	registerEvents() {
		if (this.eventQueue.length > 0) {
			let count = 0;
			this.eventQueue.forEach((e, n) => {
				if (!this.eventRegister.includes(e)) {
					this.me.addEventListener(e.event, e.dest);
					this.eventRegister.push(e);
					count++;
				}
			});
			this.eventQueue.splice(0, this.eventQueue.length);
			console.log(`Player: ${count} New Events Registered!`);
		}
	}

	createEvent(event, dest, id) {
		this.eventQueue.push({ event, dest, id });
		console.log(`Player: New Pending Event, Queued: ${this.eventQueue.length}.`);
		if (this.me) this.registerEvents();
	}

	init() {
		this.me = new Audio();
		console.log('Player: Media Element Initialized');
		if (this.eventQueue.length > 0) this.registerEvents();
	}
}

export default new Player();
