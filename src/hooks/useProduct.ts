import { ChangeEvent, FormEvent, useCallback, useEffect, useRef, useState } from "react";
import { IProduct } from "../domain/IProduct";
import { axiosInstance } from "../services/axios";

const baseProduct : IProduct = {
    name: '',
    description: '',
    image: '',
    is_active: true
};


function useProduct() {

    const [current, setCurrent] = useState<IProduct>(baseProduct);
    const [products, setProducts] = useState<IProduct[]>([]);
    const [url, setUrl] = useState('');

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

    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {  
        setCurrent((prev) => prev = {
            ...prev,
            [e.target.name]: e.target.value
        });
    },[]);

    const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
        if(!e.target.files) return;

        const image = e.target.files[0];

        if(!image) return;

        if(image.type === 'image/jpeg' || image.type === 'image/png'){
            setCurrent((prev) => prev = { ...prev, image: image });
            setUrl(URL.createObjectURL(image));
        };
    };

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
                await axiosInstance(true).patch(`products/${current.id}/`, current );
                alert('Produto alterado com sucesso');
                window.location.reload();
            }else{
                await axiosInstance(true).post('products/', { 
                    name: current.name, 
                    is_active: current.is_active,
                    description: current.description,
                    image: current.image
                });
                alert('Produto cadastrado com sucesso');
                window.location.reload();
            };
        }catch(err){
            alert('O seguinte erro ocorreu ao enviar a requisição:\n' + err)
        };
        
    },[current]);

    return {
        products,
        current,
        setCurrent,
        handleChange,
        handleSubmit,
        resetForm,
        url,
        handleFile
    };

};

export default useProduct;