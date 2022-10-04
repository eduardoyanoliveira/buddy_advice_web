import { useMediaQuery } from '../../hooks/useMediaQuery';
import UserPhoto from '../UserPhoto';
import { useState, useRef, useEffect } from 'react';
import { IUser } from '../../domain/IUser';

import { 
    CommentText
} from './styles';

import { 
    Container,
    TopContainer,
    UserContainer,
    Username,
    RegisterDate,
} from './common-styles';
import { IComment } from '../../domain/IComment';
import { axiosInstance } from '../../services/axios';

interface ICommentItemCardProps {
    comment : IComment,
};

function CommentItemCard({ comment } : ICommentItemCardProps) {

    const isDesktop = useMediaQuery(`(min-width: 650px)`);

    const [author, setAuthor] = useState<IUser | null| undefined>(null);

    const isMounted = useRef(true);

    useEffect(() => {

        async function fetchData() {
            try{
                const { data } = await  axiosInstance().get('users/' + comment?.author);
                console.log(data)
                setAuthor((prev) => prev = data);
            }catch(err){
                alert(err);
            };
        };

        if(isMounted.current){
            fetchData();  
        };

        return () => {
            isMounted.current = false;
        };
        
    });

    return (
        <Container>
            <TopContainer>
                <UserContainer>
                    <UserPhoto 
                        photoUrl={author?.image as string} 
                        alt={author?.username as string}
                    />
                    <Username> {author?.username as string} </Username>
                </UserContainer>
                
                <RegisterDate>
                    {new Date(comment.created_at as Date).toLocaleString('pt-BR')}
                </RegisterDate>
            </TopContainer>
            <CommentText isDesktop={isDesktop}>
                {comment.text}
            </CommentText>
        </Container>
    );
};

export default CommentItemCard;