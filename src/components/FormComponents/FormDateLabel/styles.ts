import styled, { css } from "styled-components";

interface LabelProps {
    margin?: string
};

export const Label = styled.label<LabelProps>`

    margin-right: 20px;

    ${({theme, margin}) => css`
        color: ${theme.colors.font};
        ${theme.typographies.subtitleTwo}
        margin: ${margin};
    `};

`;
