import styled, { css } from "styled-components";

interface IAppTemplate {
    isLogged?: boolean 
};

export const AppTemplate = styled.main<IAppTemplate>`

    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow-y: auto;

    ${({theme, isLogged}) => css`
        background-image: ${theme.colors.background} ;
        height: ${isLogged ? ' calc(100vh - 160px)' : '100vh'};
    `};
`;