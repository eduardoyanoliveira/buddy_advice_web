import styled, { css } from "styled-components";
import { ScreenSizes } from "../../utils/screen/sizes";

export const Container = styled.div`

    width: 100%;
    height: calc(100% - 160px);
    max-width: 800px;
    padding: 0 20px;

    @media(min-width:${ScreenSizes.sm}){
        padding: 0 50px;
    }; 

    &::-webkit-scrollbar {
        width: 4px;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {

        ${({theme}) => css`
            background: ${theme.colors.iconColor};
        `}
        -webkit-border-radius: 2px;
        border-radius: 2px;
    }
    
    /* Handle on hover */
        &::-webkit-scrollbar-thumb:hover {
        background: 0;
    };

    overflow-y: auto;
    
    ${({theme}) => css`
        scrollbar-color: ${theme.colors.iconColor} ${theme.colors.backgroundAlt};
        scrollbar-width: thin;
    `};

    &::-webkit-scrollbar {
        width: 4px;
    };

    /* Handle */
    &::-webkit-scrollbar-thumb {

        ${({theme}) => css`
            background: ${theme.colors.iconColor};
        `}
        -webkit-border-radius: 2px;
        border-radius: 2px;
    };
    
    /* Handle on hover */
        &::-webkit-scrollbar-thumb:hover {
        background: 0;
    };
`;

export const ProductsContainer = styled.div`

    display: grid;

`;