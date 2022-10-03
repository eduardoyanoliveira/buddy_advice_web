import styled, { css } from "styled-components";
import { ScreenSizes } from "../../../utils/screen/sizes";

interface ContainerProps {
    maxWidth?: string,
    margin?: string
};

interface IAutoCompleteContainerProps{
    borderRadius?: string, 
    displayIcon?: boolean
}; 

interface LabelProps {
    htmlFor: string
};

export const MainContainer = styled.div<ContainerProps>`
    display: flex;
    flex-direction: column;
    width: 100%;

    ${({margin, maxWidth}) => css`
        margin: ${margin};
        max-width: ${maxWidth};
    `};
`;

export const Label = styled.label<LabelProps>`
    margin-bottom: 5px;
    margin-left: 15px;
    ${({theme}) => css`
        color: ${theme.colors.font};
        ${theme.typographies.subtitleOne};
    `}

`;

export const Container = styled.div`
    position: relative;
    width: 100%;
`;

export const AutoCompleteContainer = styled.div`
    display: flex;
`;

export const AutoCompleteInput = styled.input<IAutoCompleteContainerProps>`

    outline: none;
    border: none;
    border-radius: 5px;
    height: 50px;
    width: 100%;
    text-indent: 15px;

    color: ${props => props.theme.colors.primary};

    ${({theme}) => css`
        background-color: ${theme.colors.backgroundAlt};
        border: 2px solid ${theme.colors.stroke};
        ${theme.typographies.titleTwo};
    `};

    &::placeholder { 
        ${({theme}) => css`
            color: ${theme.colors.font};
        `}
    };

    ${({ borderRadius, displayIcon }) => css`
        border-radius: ${borderRadius};
        width: ${displayIcon ? '80%' : '100%'};
    `};
`;

export const IconContainer = styled.div<IAutoCompleteContainerProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25%;

    ${({ borderRadius }) => css`
        border-radius: ${borderRadius};
    `};

    ${({theme}) => css`
        background-color: ${theme.colors.backgroundAlt};
    `};

    @media(min-width: ${ScreenSizes.sm}){
        justify-content: flex-end;
        padding-right: 25px;
        width: 20%;
    };
    
`;

export const Icon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 4px;

    color: #fff;

    ${({theme}) => css`
        background-color: ${theme.colors.primary};
    `}
`;

export const List = styled.ul`
    position: absolute;
    width: 100%;
    height: 120px;
    overflow-y: auto;
    z-index: 999;


    ${({theme}) => css`
        scrollbar-color: ${theme.colors.font} ${theme.colors.backgroundAlt};
        scrollbar-width: thin;
    `}

    &::-webkit-scrollbar {
        width: 4px;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {

        ${({theme}) => css`
            background: ${theme.colors.font};
        `}
        -webkit-border-radius: 2px;
        border-radius: 2px;
    }
    
    /* Handle on hover */
        &::-webkit-scrollbar-thumb:hover {
        background: 0;
    }

`;

export const Item = styled.li`
    display: flex;
    align-items: center;
    padding: 0 25px;
    list-style: none;
    height: 40px;
    width: 100%;

    ${({theme}) => css`
        background-color: ${theme.colors.backgroundAlt};
        color: ${theme.colors.font};
        ${theme.typographies.subtitleOne};
    `};

    cursor: pointer;

    &:hover{
        ${({theme}) => css`
            background-color: ${theme.colors.background};
            color: ${theme.colors.primary};
        `};
    }

    &:last-child{
        border-radius: 0 0 5px 5px;
    }
`;