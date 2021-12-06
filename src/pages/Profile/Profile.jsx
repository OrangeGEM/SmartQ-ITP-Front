import React, { useState, useEffect } from 'react';

import Header from './Header/Header';
import Queue from './Queue/Queue';
import Top from './Top/Top';
import Modal from './Modal/Modal';

import { Container, ContentContainer, QueueContainer } from './styled'

import data from './data.json';

export default function Profile() {
    const [modalActive, setModalActive] = useState(false);
    const [queues, setQueues] = useState(data)
    const [members, setMembers] = useState()


    return (
        <Container>
            <Modal active={modalActive} setActive={setModalActive} queues={queues} setQueues={setQueues}/>
            <ContentContainer>
                <Header />
                <Top data={queues} modalActive={modalActive} setModalActive={setModalActive} />

                <QueueContainer>
                    <Queue queues={queues} setQueues={setQueues} members={members} setMembers={setMembers} />
                </QueueContainer>
            </ContentContainer>
        </Container>
    );
}