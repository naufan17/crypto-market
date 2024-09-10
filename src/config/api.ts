import Axios from 'axios';

const axiosInstance = Axios.create({
	baseURL: process.env.REACT_APP_BASE_URL,
});

export default axiosInstance;
