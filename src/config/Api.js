import Axios from 'axios';

const axios = Axios.create({
	baseURL: "https://indodax.com/api/",
});

export default axios;