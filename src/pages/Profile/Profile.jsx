import React from 'react';

import Header from './Header/Header';
import Queue from './Queue/Queue';
import Top from './Top/Top';

import { Container, ContentContainer, QueueContainer } from './styled'

import data from './data.json';

export default function Profile() {

    
    return (
        <Container>
            <ContentContainer>
                <Header />
                <Top data={data.length}/>

                <QueueContainer>
                    <Queue queue={data} />
                </QueueContainer>
            </ContentContainer>
        </Container>
    );
}