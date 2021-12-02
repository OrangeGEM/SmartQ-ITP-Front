import React from 'react';
import Header from './Header/Header';

import { Container, ContentContainer } from './styled'
import Top from './Top/Top';

export default function Profile() {

    
    return (
        <Container>
            <ContentContainer>
                <Header />
                <Top />
            </ContentContainer>
        </Container>
    );
}