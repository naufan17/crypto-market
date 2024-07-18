import Axios from 'axios';

const axiosInstance = Axios.create({
	baseURL: "https://indodax.com/api",
});

export default axiosInstance;