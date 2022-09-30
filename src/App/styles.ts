import styled, { css } from "styled-components";

interface IAppTemplate {
    isLogged?: boolean 
};

export const AppTemplate = styled.main<IAppTemplate>`

    width: 100%;

    ${({theme, isLogged}) => css`
        background-image: ${theme.colors.background} ;
        height: ${isLogged ? ' calc(100vh - 80px)' : '100vh'};
    `};
`;