import React from 'react'
import UserPhoto from '../UserPhoto';
import { Container, Logo } from './styles';

function AppHeader() {

    const user = JSON.parse(localStorage.getItem('@user') as string);

    return (
        <Container>
            <Logo>
                Buddy Advice
            </Logo>
            <UserPhoto photoUrl={user.image} alt={user.username}/>
        </Container>
    );
};

export default AppHeader