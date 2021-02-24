import { player_init } from './player';

let delay = null;

function start() {
	player_init();
}

function check() {
	if (window) {
		start();
		clearTimeout(delay);
		delay = null;
	} else {
		check();
	}
}

export function init() {
	delay = setTimeout(check, 250);
}
