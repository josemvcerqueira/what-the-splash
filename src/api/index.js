const KEY =
	'?client_id=1fbe3c777df99fb84bcc05bc6d2e952b77008981601901275153b49b42d45672';

const URL = 'https://api.unsplash.com/photos/';

const fetchImages = async page => {
	const response = await fetch(`${URL}${KEY}&per_page=3&page=${page}`);
	const data = await response.json();
	if (response.status >= 400) {
		throw new Error(data.errors);
	}

	return data;
};

const fetchImageStats = async id => {
	const response = await fetch(`${URL}/${id}/statistics${KEY}`);
	const data = await response.json();
	if (response.status >= 400) throw new Error(data.errors);
	return data;
};

export { fetchImages, fetchImageStats };
