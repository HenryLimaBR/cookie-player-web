import player from './player';

let interval = null;

function start() {
	player.init();
}

function check() {
	if (typeof window !== 'undefined') {
		console.log(`Init: "Window Available Globally!`);
		clearInterval(interval);
		interval = null;
		start();
	}
}

export function init() {
	interval = setInterval(check, 100);
}
