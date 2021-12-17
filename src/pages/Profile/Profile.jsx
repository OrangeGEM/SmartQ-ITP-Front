import React, { useState, useEffect, useContext } from 'react';
import { createBrowserHistory } from 'history';

import Header from './Header/Header';
import Queue from './Queue/Queue';
import Top from './Top/Top';
import Modal from './Modal/Modal';
import ErrorMessage from '../../ErrorMessage/ErrorMessage';

import { Container, ContentContainer, QueueContainer } from './styled'

import { AuthContext } from '../../context/auth.context';
import { ErrorContext } from '../../context/error.context';
import { useHttp } from '../../hooks/http.hook'



export default function Profile() {
    const { request } = useHttp();
    const { setError } = useContext(ErrorContext);
    const { userEmail } = useContext(AuthContext)

    const [modalActive, setModalActive] = useState(false);
    const [modalActiveMember, setModalActiveMember] = useState(false);
    const [options, setOptions] = useState({});
    const [queues, setQueues] = useState([])
    const [members, setMembers] = useState([])
    const [email, setEmail] = useState(userEmail);
    const [activeId, setActiveId] = useState();

    const history = createBrowserHistory(); //????

    useEffect(() => {
        async function getQueues() {
            try {
                const data = await request(`${process.env.REACT_APP_API_URL}/api/profile/getqueue`, 'POST');
                setQueues(data);
            } catch(e) {
                setError( 'HTTP Error', e.message)
            }
            
        }
        getQueues();
    }, [])

    return (
        <Container>
            <ErrorMessage />
            <Modal 
                active={modalActive} 
                setActive={setModalActive} 
                queues={queues} 
                setQueues={setQueues}
                options={options} 
                setOptions={setOptions} 
                activeMember={modalActiveMember} 
                setActiveMember={setModalActiveMember}
                activeId={activeId}
                setMembers={setMembers}/>
                
                
            <ContentContainer>
                <Header email={email}/>
                <Top data={queues} modalActive={modalActive} setModalActive={setModalActive} />

                <QueueContainer>
                    <Queue 
                        setActiveId={setActiveId}
                        queues={queues} 
                        setQueues={setQueues} 
                        members={members} 
                        setMembers={setMembers} 
                        setOptions={setOptions} 
                        setModalActive={setModalActive} 
                        setActiveMember={setModalActiveMember} />
                </QueueContainer>
            </ContentContainer>
        </Container>
    );
}