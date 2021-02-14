
const p = { player: null };

export function setSrc(src) {
	if (!p.player) init();
	p.player.src = src;
}

export function play() {
	if (!p.player) init();
	p.player.play();
}

export function srcPlay(src) {
	setSrc(src);
	play();
}

export function init() {
	p.player = new Audio();
}
