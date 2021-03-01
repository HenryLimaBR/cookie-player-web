let player = null;
const events = new Array();
const registeredEvents = new Array();

export function setSrc(src) {
	player.src = src;
}

export function play() {
	try {
		player.play();
	} catch (err) {
		console.warn(err);
	} finally {
		console.log('Player: Playing');
	}
}

export function srcPlay(src) {
	setSrc(src);
	play();
}

export function pause() {
	return player.paused ? player.play() : player.pause();
}

export function createEvent(event, dest, id) {
	events.push({ event, dest, id });
	console.log(`Player: New Pending Event, Queued: ${events.length}.`);
	if (player) registerEvents();
}

function registerEvents() {
	if (events.length > 0) {
		let count = 0;
		events.forEach((e, n) => {
			if (!registeredEvents.includes(e)) {
				player.addEventListener(e.event, e.dest);
				registeredEvents.push(e);
				count++;
			}
		});
		events.splice(0, events.length);
		console.log(`Player: ${count} New Events Registered!`);
	}
}

export function player_init() {
	player = new Audio();
	if (events.length > 0) registerEvents();
}
