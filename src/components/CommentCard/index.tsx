import { useMediaQuery } from '../../hooks/useMediaQuery';
import UserPhoto from '../UserPhoto';

import { 
    CommentContainer,
    CommentText
} from './styles';

import { 
    TopContainer,
    UserContainer,
    Username,
    RegisterDate,
} from './common-styles';
import { IComment } from '../../domain/IComment';

interface ICommentItemCardProps {
    comment : IComment,
};

function CommentItemCard({ comment } : ICommentItemCardProps) {

    const isDesktop = useMediaQuery(`(min-width: 650px)`);

    return (
        <CommentContainer isDesktop={isDesktop}>
            <TopContainer>
                <UserContainer>
                    <UserPhoto 
                        photoUrl={comment.author?.image as string} 
                        alt={comment.author?.username as string}
                    />
                    <Username> {comment.author?.username as string} </Username>
                </UserContainer>
                
                <RegisterDate>
                    {new Date(comment.created_at as Date).toLocaleString('pt-BR')}
                </RegisterDate>
            </TopContainer>
            <CommentText isDesktop={isDesktop}>
                {comment.text}
            </CommentText>
        </CommentContainer>
    );
};

export default CommentItemCard;