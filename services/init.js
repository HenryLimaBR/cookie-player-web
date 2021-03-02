import { player_init } from './player';

let interval = null;

function start() {
	player_init();
}

function check() {
	if (window) {
		start();
		clearInterval(interval);
		interval = null;
	}
}

export function init() {
	interval = setInterval(check, 250);
}
