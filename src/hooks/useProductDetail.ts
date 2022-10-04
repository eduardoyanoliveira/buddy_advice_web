import { FormEvent, useEffect, useState } from "react";
import { IComment } from "../domain/IComment";
import { axiosInstance } from "../services/axios";
import { getByUrlId } from "./GetByUrlId/getByUrlId";
import useProduct from "./useProduct";

function useProductDetail() {
    const { products } = useProduct();

    const [text, setText] = useState<string>('');

    const { item: product} = getByUrlId(products);

    const [comments, setComments] = useState<IComment[]>([]);

    useEffect(() => {

        async function fetchData() {
            try{
                const { data } = await  axiosInstance().get('comments/' + product?.id + '/get_comments_by_product/');
                setComments((prev) => prev = data);
            }catch(err){
                alert(err);
            };
        };

        if(product?.id){
            fetchData();  
        };

    },[product]);

    
    const handleSubmit = async (e : FormEvent) => {
        e.preventDefault();

        try{
            await axiosInstance().post('comments/', {
                text,
                author: JSON.parse(localStorage.getItem('@user') as string).id,
                product: product?.id
            });
            alert('Comentário registrado com sucesso!');
            window.location.reload();
        }catch(err){
            alert(err);
        };
       
    };

    return {
        product,
        comments,
        text,
        handleSubmit,
        setText
    };
};

export default useProductDetail;