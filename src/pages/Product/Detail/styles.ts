import styled, { css } from "styled-components";
import { ScreenSizes } from "../../../utils/screen/sizes";

export const PageContainer = styled.div`
    height: 100%;
    padding: 0 30px;
`;

export const ProductContainer = styled.div`
    margin: 30px 0 50px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 300px;
    width: 100%;
    max-width: 700px;
    padding: 0 20px;
`;

export const ProductName = styled.h1`
    margin-bottom: 20px;
    ${({theme}) => css`
        color: ${theme.colors.primary};
        ${theme.typographies.titleOne};
    `};
`;

export const Image = styled.img`
    display: flex;
    justify-content: center;
    height: 250px;
    border-radius: 10px;
    object-fit: fill;
    width: 80%;
`;

export const ProductDesc = styled.p`
    margin-top: 10px;
    ${({theme}) => css`
        color: ${theme.colors.font};
        ${theme.typographies.subtitleTwo};
    `};
`;

export const CommentsContainer = styled.div`
    
`;

export const Form = styled.form`

    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 650px;
    margin-bottom: 30px;
`;

export const Title = styled.h1`
    display: flex;
    justify-content: center;
    margin: 30px 0 ;
    ${({theme}) => css`
        color: ${theme.colors.font};
        ${theme.typographies.titleOne}
    `}

    @media(min-width:${ScreenSizes.xl}){
        width: 100%;
    }; 
`;
