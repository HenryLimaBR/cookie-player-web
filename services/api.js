import axios from 'axios';

export async function getSearch(q) {
	return (await axios.get(`/api/search?q=${q}`)).data;
}

export async function getAudio(id) {
	return (await axios.get(`/api/audio?id=${id}`)).data;
}
