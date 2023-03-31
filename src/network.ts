import axios, { AxiosRequestConfig } from 'axios';

const reqInstance = axios.create({
	baseURL: 'http://localhost:8100/api/',
});

reqInstance.interceptors.response.use(
	(res) => {
		// 响应拦截
		return res;
	},
	(error) => {
		Promise.reject(error);
	}
);

const getRequest = (
	path: string,
	params?: any,
	options?: AxiosRequestConfig
) => {
	return reqInstance.get(path, {
		params,
		...options,
	});
};

const postRequest = (
	path: string,
	body?: any,
	options?: AxiosRequestConfig
) => {
	return reqInstance.post(path, body, options);
};

export { getRequest, postRequest };
