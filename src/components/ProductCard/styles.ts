import styled, { css } from "styled-components";

interface IContainer {
    margin?: string
};

export const Container = styled.div<IContainer>`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: fit-content;
    flex: 1 1 200px;
    flex: 0 1 200px;
    border-radius: 10px;

    ${({theme, margin}) => css`
        background-color: ${theme.colors.backgroundAlt};
        margin: ${margin};
    `};
    padding-bottom: 10px;
    cursor: pointer;
`;

export const Image = styled.img`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 150px;
    border-radius: 10px 10px 0 0;
    object-fit: fill;
`;

export const ContentContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    
    height: 100%;
    padding: 20px 10px;

`;

export const ProductName = styled.h3`
    
    ${({theme}) => css`
        color: ${theme.colors.primary};
        ${theme.typographies.subtitleOne};
    `};
`;
