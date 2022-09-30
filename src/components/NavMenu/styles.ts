import styled, { css } from "styled-components";
import { ScreenSizes } from "../../utils/screen/sizes";


export const Container = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    height: 80px;
    width: 100%;

    ${({theme}) => css`
        background-color: ${theme.colors.backgroundAlt} ;
    `};

`;

export const Menu = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 800px;
`;

export const MenuItem = styled.li`
    list-style: none;
    margin: 0 15px;

    ${({theme}) => css`
        color: ${theme.colors.font} ;
        ${theme.typographies.titleTwo}
    `};
    
    &:hover{
        ${({theme}) => css`
            color: ${theme.colors.primary} ;
        `};
    };

    
    @media(min-width:${ScreenSizes.md}){
        margin: 0 30px;
    }; 

    
    @media(min-width:${ScreenSizes.lg}){
        margin: 0 35px;
    };

    font-size: 1.6rem;
    
    cursor: pointer;
`;