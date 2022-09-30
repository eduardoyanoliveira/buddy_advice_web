import React, { useState, FormEvent } from 'react'
import { axiosInstance } from '../services/axios';

interface IUserCredentials {
    email: string,
    password: string,
}; 


function useLogin() {

    const [current, setCurrent] = useState<IUserCredentials>({
        email: '',
        password: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {  
        setCurrent({
            ...current,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: FormEvent) => {

        e.preventDefault();

        const { email, password } = current;

        if(!email || !password){
            alert('Todos os campos deste formulário são obrigatórios!');
            return;
        };

        try{
            const { data } = await axiosInstance().post('token/', current);
            localStorage.setItem('@token', data.access);
            window.location.reload();

        }catch(err){
            alert('Não foi possível realizar o login, confira os dados! ');
            console.log(err);
        };
        
        
    };

    return { 
        current, 
        handleChange,
        handleSubmit
    };
};

export default useLogin;