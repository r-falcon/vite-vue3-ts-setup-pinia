import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

const service = axios.create();

service.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        return config;
    },
    (error: any) => {
        Promise.reject(error);
    },
);

service.interceptors.response.use(
    async (response: AxiosResponse) => {
        //    do something
    },
    (error: any) => {
        return Promise.reject(error);
    },
);

export default service;
