import React, { useState, FormEvent } from 'react'
import { axiosInstance } from '../services/axios';

interface IUser {
    username: string,
    email: string,
    password: string,
    passwordConfirm: string
}; 

export const baseUser = {
    username: '',
    email: '',
    password: '',
    passwordConfirm: ''
};


function useCreateUser() {

    const [current, setCurrent] = useState<IUser>(baseUser);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {  
        setCurrent({
            ...current,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: FormEvent) => {

        e.preventDefault();

        const { username, email, password, passwordConfirm } = current;

        if(!username || !email || !password || !passwordConfirm){
            alert('Todos os campos deste formulário são obrigatórios!');
            return;
        };

        if(password !== passwordConfirm){
            alert('Senhas invalidas');
            setCurrent((prev) => prev = {
                ...prev,
                password: '',
                passwordConfirm: ''
            });

            return;
        };

        await axiosInstance().post('users/', { username, email, password, passowrd_confirmation: passwordConfirm} );

        window.location.reload();
    };

    return { 
        current, 
        handleChange,
        handleSubmit
    };
};

export default useCreateUser;