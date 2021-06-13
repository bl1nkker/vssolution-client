import axios from 'axios';

export const submitData = async (url, data, callback) => {
	try {
		await axios.post(url, data, {
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(callback);
	} catch (error) {
		console.log(error);
	}
};