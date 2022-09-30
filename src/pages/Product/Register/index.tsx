import React, { useEffect, useState, FormEvent } from 'react'
import AutoComplete from '../../../components/AutoComplete';
import Button from '../../../components/Buttons/Button';
import { ButtonColors } from '../../../components/Buttons/Button/ButtonColors';
import Form from '../../../components/FormComponents/Form';
import FormContainer from '../../../components/FormComponents/FormContainer';
import FormDateLabel from '../../../components/FormComponents/FormDateLabel';
import FormToggle from '../../../components/FormComponents/FormToggle';
import InputComponent from '../../../components/Inputs/Input';
import { IProduct } from '../../../domain/IProduct';
import { axiosInstance } from '../../../services/axios';

const baseProduct : IProduct = {
    name: '',
    is_active: true
}

function ProductRegisterPage() {

    const [current, setCurrent] = useState<IProduct>(baseProduct);
    const [products, setProducts] = useState<IProduct[]>([]);

    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {  
        setCurrent({
        ...current,
        [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: FormEvent) => {

        e.preventDefault();

        if(!current.name){
            alert('Descrição para o produto é obrigatória');
            return;
        };

        try{
            await axiosInstance().post('products/', { name: current.name, is_active: current.is_active} );
            alert('Produto cadastrado com sucesso');
            resetForm(e);
        }catch(err){
            alert('O seguinte erro ocorreu ao cadastrar o produto:\n' + err)
        };
        
    };


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

    const resetForm = (e: FormEvent) => {
        e.preventDefault();

        setCurrent(baseProduct);
    };


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

        <FormContainer 
          justifyContent={current.name ? 'space-between' : 'flex-end'}
          padding={'0 15px'}
        >
            {
                current.name && (
                <FormDateLabel
                    dateLabel='Data de Cadastro'
                    date= {current.created_at 
                    ? new Date((current.created_at as Date)).toLocaleString('pt-BR')
                    : new Date().toLocaleString('pt-BR')
                    }
                />
                )
            }
            <FormToggle 
                id='toggle' 
                toggleLabel='Ativo?' 
                initialValue={current?.is_active} 
                getValue={(value: boolean) => setCurrent((prev) => prev = { ...prev, is_active: value })}
            />
      </FormContainer>

            <FormContainer>
                <InputComponent
                    name='name'
                    label='Descrção'
                    onChange={handleChange}
                    value={current.name || ''}
                    type={'text'}
                />
            </FormContainer>

            <FormContainer>
                {
                    current.name && (
                        <>
                            <Button 
                                text="Gravar" 
                                backgroundColor={ButtonColors.primary} 
                                margin='0 20px 0 0'
                                onClick={handleSubmit}
                            />
                            <Button 
                                text="Cancelar" 
                                backgroundColor={ButtonColors.secondary} 
                                onClick={resetForm}
                            />
                        </>
                    )
                }
            </FormContainer>
        </Form>
    );
};

export default ProductRegisterPage;