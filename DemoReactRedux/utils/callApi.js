import axios from 'axios';

export default function callApi(endpoint, method="GET", body) {
	return axios({
			  method: method,
			  url: `http://5a59baf3bc6e340012a0375c.mockapi.io/api/${endpoint}`,
			  data: body
			}).catch(err => {
				console.log(err);
			});
};