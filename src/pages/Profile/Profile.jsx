import React, { useState, useEffect } from 'react';
import { createBrowserHistory } from 'history';

import Header from './Header/Header';
import Queue from './Queue/Queue';
import Top from './Top/Top';
import Modal from './Modal/Modal';

import { Container, ContentContainer, QueueContainer } from './styled'
import { useHttp } from '../../hooks/http.hook'

import data from './data.json';

export default function Profile() {
    const [modalActive, setModalActive] = useState(false);
    const [queues, setQueues] = useState(data)
    const [members, setMembers] = useState([])
    const { request } = useHttp();
    let history = createBrowserHistory();
    console.log(history)
    console.log(members);

    useEffect(() => {
        async function verifyUser() {
            try {
                const data = await request(`${process.env.REACT_APP_API_URL}/api/auth/verify`, 'POST');
                console.log(data);
                if(data?.done) {
                    await getQueues();
                }
            } catch(e) {
                // history.push("/signin")
                // document.location.reload(); <- need to fix
                console.log(e.message);
            }
            
        }
        verifyUser();

        async function getQueues() {
            try {
                const data = await request(`${process.env.REACT_APP_API_URL}/api/profile/getqueue`, 'POST');
                console.log(data);
            } catch(e) {
                console.log(e.message);
            }
            
        }
        
    }, [])

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