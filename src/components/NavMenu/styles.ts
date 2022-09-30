import styled, { css } from "styled-components";

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    height: 80px;
    width: 100%;

    ${({theme}) => css`
        background-color: ${theme.colors.backgroundAlt} ;
    `};

`;

export const Logo = styled.h2`
    font-family: 'EB Garamond', serif;
    font-size: 30px;

    ${({theme}) => css`
        color: ${theme.colors.primary} ;
    `};
    
    cursor: pointer;
`;

export const Menu = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const MenuItem = styled.li`
    list-style: none;
    margin-left: 25px;

    ${({theme}) => css`
        color: ${theme.colors.font} ;
        ${theme.typographies.titleTwo}
    `};
    
    &:hover{
        ${({theme}) => css`
            color: ${theme.colors.primary} ;
        `};
    };

    font-size: 1.6rem;
    
    cursor: pointer;
`;