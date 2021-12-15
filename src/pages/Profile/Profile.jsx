import React, { useState, useEffect } from 'react';
import { createBrowserHistory } from 'history';

import Header from './Header/Header';
import Queue from './Queue/Queue';
import Top from './Top/Top';
import Modal from './Modal/Modal';

import { Container, ContentContainer, QueueContainer } from './styled'
import { useHttp } from '../../hooks/http.hook'


export default function Profile() {
    const [modalActive, setModalActive] = useState(false);
    const [modalActiveMember, setModalActiveMember] = useState(false);
    const [options, setOptions] = useState({});
    const [queues, setQueues] = useState([])
    const [members, setMembers] = useState([])
    const [email, setEmail] = useState('');
    const [activeId, setActiveId] = useState();
    const { request } = useHttp();

    const history = createBrowserHistory(); //????

    useEffect(() => {
        async function verifyUser() {
            try {
                const data = await request(`${process.env.REACT_APP_API_URL}/api/auth/verify`, 'POST');
                console.log(data);
                if(data?.email) {
                    setEmail(data.email);
                    await getQueues();
                }
            } catch(e) {
                history.push("/signin")
                document.location.reload(); //<- need to fix
                console.log(e.message);
            }
            
        }
        verifyUser();

        async function getQueues() {
            try {
                const data = await request(`${process.env.REACT_APP_API_URL}/api/profile/getqueue`, 'POST');
                setQueues(data);
            } catch(e) {
                console.log(e.message);
            }
            
        }
        
    }, [])

    return (
        <Container>
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