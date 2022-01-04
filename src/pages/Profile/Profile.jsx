import React, { useState, useEffect, useContext } from 'react';

import { Container, ContentContainer } from './styled'

import { AuthContext } from '../../context/auth.context';
import { ErrorContext } from '../../context/error.context';
import { useHttp } from '../../hooks/http.hook'

import Header from './Header/Header.jsx'
import Top from './Top/Top.jsx';
import Queue from './Queue/Queue.jsx';
import Modal from './Modal/Modal';

export default function Profile() {
    const { request } = useHttp();
    const { isAuthenticated, userId, userEmail } = useContext(AuthContext)

    const [queues, setQueues] = useState([]);
    const [modalSettings, setModalSettings] = useState({})

    useEffect(() => {
        if(isAuthenticated) {
            async function getQueue() {
                const data = await request(`${process.env.REACT_APP_API_URL}/api/profile/getqueue`, 'POST', {userId})
                setQueues(data)
                console.log(data)
            }
            getQueue();
        }   

    }, [])

    return (
        <Container>
            {
                modalSettings ? (
                    <Modal settings={modalSettings} setSettings={setModalSettings} queues={queues} setQueues={setQueues}/>
                ) : <></>
            }
            <ContentContainer>
                <Header email={userEmail}/>
                <Top count={queues.length} setSettings={setModalSettings} queues={queues} setQueues={setQueues}/>
                <Queue queues={queues} setQueues={setQueues} setSettings={setModalSettings}/>
            </ContentContainer>
        </Container>
    );
}