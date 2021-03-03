import axios from 'axios';

class Api {
	baseURL = '';

	constructor(baseURL = '') {
		this.baseURL = baseURL.charAt(baseURL.length - 1) === '/' ? baseURL.slice(0, baseURL.length - 1) : baseURL;
	}

	async search(q) {
		return (await axios.get(`${this.baseURL}/api/search?q=${q}`)).data;
	}

	async audio(id) {
		return (await axios.get(`${this.baseURL}/api/audio?id=${id}`)).data;
	}

	cover(url) { return `${this.baseURL/api/album?i=${url}`; }
}


export default new Api('/');
