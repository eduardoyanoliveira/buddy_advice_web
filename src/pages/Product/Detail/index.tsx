import React, { FormEvent, useEffect, useRef, useState } from 'react'
import Button from '../../../components/Buttons/Button';
import { ButtonColors } from '../../../components/Buttons/Button/ButtonColors';
import Form from '../../../components/FormComponents/Form';
import FormContainer from '../../../components/FormComponents/FormContainer';
import TextBox from '../../../components/Inputs/TextBox';
import { IComment } from '../../../domain/IComment';
import { getByUrlId } from '../../../hooks/GetByUrlId/getByUrlId';
import useProduct from '../../../hooks/useProduct';
import { axiosInstance } from '../../../services/axios';
import { ProductContainer, ProductDesc, ProductName, Image } from './styles';

function ProductDetailPage() {

    const { products } = useProduct();

    const [text, setText] = useState<string>('');

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

    const { item: product} = getByUrlId(products);

    const [comments, setComments] = useState<IComment[]>([]);
    const isMounted = useRef(true);

    useEffect(() => {

        async function fetchData() {
            try{
                const { data } = await  axiosInstance().get('comments');
                setComments((prev) => prev = data);
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
        
    });

    console.log(comments)

    return (
        <>
            <ProductContainer>
                <ProductName>
                    {product?.name}
                </ProductName>
                <Image src={product?.image as string} alt={product?.name} />
                <ProductDesc>
                    {product?.description}
                </ProductDesc>
            </ProductContainer>
            <Form title={'Faça um comentário'}>
            <FormContainer>
                    <TextBox name='text' value={text} onChange={(e) => setText(e.target.value)}/>
                </FormContainer>
                <FormContainer>
                    <Button 
                        text='Responder' 
                        backgroundColor={ButtonColors.primaryGradient} 
                        onClick={(e) => handleSubmit(e)}
                    />
                </FormContainer>
            </Form>
        </>
    );
};

export default ProductDetailPage;