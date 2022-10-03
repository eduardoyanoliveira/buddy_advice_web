import styled from "styled-components";
import { Container, Subject, Text } from './common-styles';

interface ICommonProps {
    isDesktop: boolean,
}

export const CommentContainer = styled(Container)<ICommonProps>`
    min-height: 150px;
    ${({ isDesktop }) => isDesktop && 'min-height: 80px;' };
`;

export const CommentSubject = styled(Subject)<ICommonProps>`
    
`;

export const CommentText = styled(Text)<ICommonProps>`
    ${({ isDesktop }) => isDesktop && 'padding: 0 90px;' };
`;
