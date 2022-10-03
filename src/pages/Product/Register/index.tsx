import AutoComplete from '../../../components/AutoComplete';
import Button from '../../../components/Buttons/Button';
import { ButtonColors } from '../../../components/Buttons/Button/ButtonColors';
import Form from '../../../components/FormComponents/Form';
import FormContainer from '../../../components/FormComponents/FormContainer';
import FormDateLabel from '../../../components/FormComponents/FormDateLabel';
import FormToggle from '../../../components/FormComponents/FormToggle';
import InputComponent from '../../../components/Inputs/Input';
import { IProduct } from '../../../domain/IProduct';
import useProduct from '../../../hooks/useProduct';


function ProductRegisterPage() {

    const {
       products,
       current,
       setCurrent,
       handleChange,
       handleSubmit,
       resetForm 
    } = useProduct();

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
                getValue={(value: boolean) => setCurrent((prev: IProduct) => prev = { ...prev, is_active: value })}
            />
      </FormContainer>

            <FormContainer>
                <InputComponent
                    name='name'
                    label='Descrição'
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