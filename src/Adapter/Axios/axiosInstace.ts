import axios, { AxiosInstance as AxiosType } from 'axios';
import { BASE_URL } from '../../Utils/constant';

export const axiosInstance: AxiosType = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    // timeout: AxiosTimeout,
    maxBodyLength: Infinity,
});
