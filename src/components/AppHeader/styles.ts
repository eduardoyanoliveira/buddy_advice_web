import styled, { css } from "styled-components";

export const Container = styled.header`
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding:  0 20px;

    ${({theme}) => css`

        background-color: ${theme.colors.backgroundAlt};
    `};
`;

export const Logo = styled.h2`
    ${({theme}) => css`
        color: ${theme.colors.primary};
        ${theme.typographies.titleOne};
    `}; 

    font-family: 'EB Garamond', serif;
`;