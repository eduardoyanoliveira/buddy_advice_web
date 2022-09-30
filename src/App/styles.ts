import styled, { css } from "styled-components";

export const AppTemplate = styled.main`

    height: calc(100vh - 80px);
    width: 100%;

    ${({theme}) => css`
        background-image: ${theme.colors.background} ;
    `};
`;