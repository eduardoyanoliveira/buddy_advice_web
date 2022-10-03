import styled, { css } from "styled-components";


interface InputContainerProps{
    margin?: string,
    maxWidth?: string,
}

interface LabelProps {
    htmlFor: string
}


export const InputContainer = styled.div<InputContainerProps>`
    display: flex;
    flex-direction: column;
    width: 100%;

    ${({margin, maxWidth}) => css`
        margin: ${margin};
        max-width: ${maxWidth};
    `}
`;

export const Label = styled.label<LabelProps>`
    margin-bottom: 5px;
    margin-left: 15px;
    ${({theme}) => css`
        color: ${theme.colors.font};
        ${theme.typographies.subtitleOne};
    `}

`;

export const TextInput = styled.textarea`
    outline: none;
    border: none;
    border-radius: 5px;
    height: 200px;
    width: 100%;
    text-indent: 15px;
    padding: 15px 0;

    color: ${props => props.theme.colors.font};

    ${({theme}) => css`
        background-color: ${theme.colors.backgroundAlt};
        ${theme.typographies.titleTwo};
    `}

    &::placeholder { 
        ${({theme}) => css`
            color: ${theme.colors.font};
        `}
    };

    &:focus{
       
       ${({theme}) => css`
           border: 3px solid ${theme.colors.primary};
       `}
    };
`;