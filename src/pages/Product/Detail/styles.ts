import styled, { css } from "styled-components";

export const ProductContainer = styled.div`
    margin: 30px 0;
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