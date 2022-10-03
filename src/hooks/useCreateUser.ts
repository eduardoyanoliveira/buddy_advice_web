import React, { useState, FormEvent, ChangeEvent } from 'react'
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../services/axios';

interface IUser {
    username: string,
    email: string,
    password: string,
    passwordConfirm: string,
    file: string | File
}; 

export const baseUser = {
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
    file: ''
};


function useCreateUser() {

    const navigate = useNavigate();
    const [current, setCurrent] = useState<IUser>(baseUser);
    const [url, setUrl] = useState('');


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {  
        setCurrent({
            ...current,
            [e.target.name]: e.target.value
        });
    };

    const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
        if(!e.target.files) return;

        const image = e.target.files[0];

        if(!image) return;

        if(image.type === 'image/jpeg' || image.type === 'image/png'){
            setCurrent((prev) => prev = { ...prev, file: image });
            setUrl(URL.createObjectURL(image));
        };
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
        navigate('/');
        window.location.reload();
    };

    return { 
        current, 
        handleChange,
        handleSubmit,
        url,
        handleFile
    };
};

export default useCreateUser;