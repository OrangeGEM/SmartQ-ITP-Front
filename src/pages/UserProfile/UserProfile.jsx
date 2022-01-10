import React, { useState, useEffect, useContext } from 'react';

import Header from './Header/Header';
import Content from './Content/Content';

import { Container, InnerContent } from './styled';

import { AuthContext } from '../../context/auth.context'

export default function UserProfile() {
    const { userEmail } = useContext(AuthContext)
    

    return (
        <Container>
            <InnerContent>
                <Header email={userEmail}/>
                <Content email={userEmail} />
            </InnerContent>
        </Container>
    );
}