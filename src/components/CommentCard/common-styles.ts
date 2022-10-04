import styled, { css } from "styled-components";
import { ScreenSizes } from "../../utils/screen/sizes";



export const Container = styled.div`

    width: 100%;
    height: auto;
    padding: 10px 20px;
    margin-bottom: 20px;
    border-radius: 10px;
    max-width: 650px;

    ${({theme}) => css`
        background-color: ${theme.colors.backgroundAlt};
    `};


    @media(min-width:${ScreenSizes.lg}){
        padding: 10px 10px;
    };

`;

export const TopContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const MiddleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const UserContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    margin: 5px 0px;
`;

export const Username = styled.label`
    margin-left: 10px;


    ${({theme}) => css`
        color: ${theme.colors.font};
        ${theme.typographies.subtitleTwo};
    `}

    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`;


export const RegisterDate = styled.label`
    ${({theme}) => css`
        color: ${theme.colors.font};
        ${theme.typographies.subtitleTwo};
    `}
    font-size: 12px;
    text-align: end;
    margin: 5px 0px;
`;


export const Subject = styled.h4`
    ${({theme}) => css`
        color: ${theme.colors.primary};
        ${theme.typographies.titleTwo};
    `}

    text-align: center;
    margin: 0 auto;

    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;

    max-width: 160px;
`;


export const Text = styled.p`
 ${({theme}) => css`
        color: ${theme.colors.font};
        ${theme.typographies.subtitleOne};
    `}

    padding: 0 40px;
`;

export const IconsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
`;
