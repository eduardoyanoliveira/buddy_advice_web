import styled, { css } from "styled-components";
import { ScreenSizes } from "../../utils/screen/sizes";

interface IContainer {
    margin?: string
};

export const Container = styled.div<IContainer>`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: fit-content;
    width: 270px;
   
    border-radius: 10px;

    ${({theme, margin}) => css`
        background-color: ${theme.colors.backgroundAlt};
        margin: ${margin};
    `};

    @media(min-width:${ScreenSizes.md}){
       flex-direction: row;
       height: 150px;
    }; 

    cursor: pointer;
`;

export const Image = styled.img`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 150px;
    border-radius: 10px 10px 0 0;
    object-fit: fill;

    @media(min-width:${ScreenSizes.md}){
        border-radius: 10px 0 0 10px;
        width: 250px;
        object-fit: cover;
    }; 
`;

export const ContentContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    
    height: 100%;
    padding: 20px 10px;

    @media(min-width:${ScreenSizes.md}){
        width: calc(100% - 250px);
        padding: 15px 0;
    }; 
`;

export const ProductName = styled.h3`
    
    ${({theme}) => css`
        color: ${theme.colors.primary};
        ${theme.typographies.titleTwo};
    `};
`;

export const ProductDesc = styled.p`
    margin-top: 10px;
    ${({theme}) => css`
        color: ${theme.colors.font};
        ${theme.typographies.subtitleTwo};
    `};
`;