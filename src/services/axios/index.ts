import axios, { AxiosError, AxiosResponse } from 'axios';
import { AuthTokenError } from '../errors/AuthTokenError';

const BASE_URL = 'http://localhost:8000/api/';


export function axiosInstance(multipart?: boolean){

    const token = localStorage.getItem('@token')

    if(!token){
        console.log('Error: Token not found')
    };

    let headers = {};

    if(multipart){
        headers = {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
        };
    }else{
        headers = {
            Authorization: `Bearer ${token}`
        };
    };

    const instance = axios.create({
        baseURL: BASE_URL,
        timeout: 4000,
        headers
    });

    instance.interceptors.response.use( (response : AxiosResponse) => {
        return response;
    }, (error : AxiosError) => {
        if(error.response?.status === 401){
            if(typeof window !== undefined){
                localStorage.removeItem('@token');
            }else{
                return Promise.reject( new AuthTokenError())
            }
        };

        return Promise.reject(error);
    });

    return instance;
};
