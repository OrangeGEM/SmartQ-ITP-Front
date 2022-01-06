import React, { useState, useEffect, useContext } from 'react';

import { Container, ContentContainer } from './styled'

import { AuthContext } from '../../context/auth.context';
import { ErrorContext } from '../../context/error.context';
import { useHttp } from '../../hooks/http.hook'

import Header from './Header/Header.jsx'
import Top from './Top/Top.jsx';
import Queue from './Queue/Queue.jsx';
import Modal from './Modal/Modal';
import SubmitModal from './Modal/SubmitModal';

export default function Profile({socket}) {
    const { request } = useHttp();
    const { isAuthenticated, userId, userEmail } = useContext(AuthContext)

    const [queues, setQueues] = useState([]);
    const [modalSettings, setModalSettings] = useState({})
    const [submitModal, setSubmitModal] = useState(false)

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

    async function changeQueueCountIO(number) {
        socket.emit('changeQueueCount', number)
    }

    return (
        <Container>
            {
                modalSettings ? (
                    <Modal settings={modalSettings} setSettings={setModalSettings} queues={queues} setQueues={setQueues} changeQueueCount={changeQueueCountIO}/>
                ) : <></>
            }
            {
                submitModal ? (
                    <SubmitModal setSubmitModal={setSubmitModal} queues={queues} setQueues={setQueues} />
                ) : <></>
            }
            <ContentContainer>
                <Header email={userEmail}/>
                <Top count={queues.length} setSettings={setModalSettings} queues={queues} setQueues={setQueues} setSubmitModal={setSubmitModal}/>
                <Queue queues={queues} setQueues={setQueues} setSettings={setModalSettings}/>
            </ContentContainer>
        </Container>
    );
}