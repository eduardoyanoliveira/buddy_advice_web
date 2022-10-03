import Button from "../../../components/Buttons/Button";
import { ButtonColors } from "../../../components/Buttons/Button/ButtonColors";
import Form from "../../../components/FormComponents/Form";
import FormContainer from "../../../components/FormComponents/FormContainer";
import FileInput from "../../../components/Inputs/FileInput";
import InputComponent from "../../../components/Inputs/Input";
import useCreateUser from "../../../hooks/useCreateUser";
import { LinkLabel } from "../styles";

function UserRegisterPage() {

    const { current, 
        handleChange,
        handleSubmit,
        url, 
        handleFile 
    } = useCreateUser();

    return (
        <Form title={'Cadastre-se'}>

            <FormContainer>
                <FileInput
                    alt={current?.username}
                    url={url}
                    handleChange={handleFile}
                />
            </FormContainer>
                
            <FormContainer>
                <InputComponent 
                    label="Username"
                    name="username"
                    type={'text'}
                    value={current.username || ''}
                    onChange={handleChange}
                />
            </FormContainer>

            <FormContainer>
                <InputComponent 
                    label="Email"
                    name="email"
                    type={'email'}
                    value={current.email || ''}
                    onChange={handleChange}
                />
            </FormContainer>

            <FormContainer>
                <InputComponent 
                    label="Senha"
                    name="password"
                    type={'password'}
                    value={current.password || ''}
                    onChange={handleChange}
                />
            </FormContainer>

            <FormContainer>
                <InputComponent 
                    label="Confirme sua Senha"
                    name="passwordConfirm"
                    type={'password'}
                    value={current.passwordConfirm || ''}
                    onChange={handleChange}
                />
            </FormContainer>
            
            <FormContainer>
                <Button 
                    text="Enviar"
                    backgroundColor={ButtonColors.primaryGradient}
                    onClick={handleSubmit}
                />
            </FormContainer>
            <LinkLabel to={'/'}> Já possui uma conta? Faça login por aqui!</LinkLabel>
        </Form>
    );
};

export default UserRegisterPage;