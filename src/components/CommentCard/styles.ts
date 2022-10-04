import styled from "styled-components";
import { Subject, Text } from './common-styles';

interface ICommonProps {
    isDesktop: boolean,
}


export const CommentSubject = styled(Subject)<ICommonProps>`
    
`;

export const CommentText = styled(Text)<ICommonProps>`
    ${({ isDesktop }) => isDesktop && 'padding: 0 90px;' };
`;
