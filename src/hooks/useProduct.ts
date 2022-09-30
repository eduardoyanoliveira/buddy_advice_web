import { FormEvent, useCallback, useEffect, useRef, useState } from "react";
import { IProduct } from "../domain/IProduct";
import { axiosInstance } from "../services/axios";

const baseProduct : IProduct = {
    name: '',
    is_active: true
};


function useProduct() {

    const [current, setCurrent] = useState<IProduct>(baseProduct);
    const [products, setProducts] = useState<IProduct[]>([]);

    const isMounted = useRef(true);

    useEffect(() => {
        
        async function fetchData() {
            try{
                const { data } = await  axiosInstance().get('products');
                setProducts((prev) => prev = data);
            }catch(err){
                alert(err);
            };
        };

        if(isMounted.current){
            fetchData();  
        };

        return () => {
            isMounted.current = false;
        };
        
    }, []);

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {  
        setCurrent((prev) => prev = {
            ...prev,
            [e.target.name]: e.target.value
        });
    },[]);

    const resetForm = useCallback((e: FormEvent) => {
        e.preventDefault();
        setCurrent((prev) => prev = baseProduct);
    },[]);

    const handleSubmit = useCallback(async (e: FormEvent) => {

        e.preventDefault();

        if(!current.name){
            alert('Descrição para o produto é obrigatória');
            return;
        };

        try{
            if(current.id){
                await axiosInstance().put('products/', current );
                alert('Produto alterado com sucesso');
            }else{
                await axiosInstance().post('products/', { name: current.name, is_active: current.is_active} );
                alert('Produto cadastrado com sucesso');
                resetForm(e);
            };
        }catch(err){
            alert('O seguinte erro ocorreu ao enviar a requisição:\n' + err)
        };
        
    },[current, resetForm]);

    return {
        products,
        current,
        setCurrent,
        handleChange,
        handleSubmit,
        resetForm
    };

};

export default useProduct;