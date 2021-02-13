
const p = { player: null };

export function getPlayer() {
	if (!p.player) init();
	return p.player;
}

export function init() {
	p.player = new Audio();
}
