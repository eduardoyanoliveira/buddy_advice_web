import React, { useEffect, useState } from 'react'
import AutoComplete from '../../../components/AutoComplete';
import Form from '../../../components/FormComponents/Form';
import FormContainer from '../../../components/FormComponents/FormContainer';
import { IProduct } from '../../../domain/IProduct';
import { axiosInstance } from '../../../services/axios';


function ProductRegisterPage() {

    const [current, setCurrent] = useState<IProduct>();
    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        async function fetchData() {
            try{
                const { data } = await  axiosInstance().get('products');
                setProducts((prev) => prev = data);
            }catch(err){
                alert(err);
            };
        };
        fetchData();  
    }, []);

    return (
        <Form title='Produtos'>
            <FormContainer>
                <AutoComplete
                    name='products'
                    data={products}
                    getItem={(value: IProduct) => setCurrent((prev : IProduct) => prev = value)}
                    fieldToDisplay={'name'}
                />
            </FormContainer>
        </Form>
    );
};

export default ProductRegisterPage;