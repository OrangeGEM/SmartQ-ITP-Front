import React, { useState, useEffect, useContext } from 'react';

import { Container, ContentContainer } from './styled'

import { AuthContext } from '../../context/auth.context';
import { ErrorContext } from '../../context/error.context';
import { useHttp } from '../../hooks/http.hook'

import Header from './Header/Header.jsx'
import Top from './Top/Top.jsx';
import Queue from './Queue/Queue.jsx';

export default function Profile() {
    const { request } = useHttp();
    const { isAuthenticated, userId, userEmail } = useContext(AuthContext)

    const [queues, setQueues] = useState([]);

    useEffect(() => {
        if(isAuthenticated) {
            async function getQueue() {
                const data = await request(`${process.env.REACT_APP_API_URL}/api/profile/getqueue`, 'POST', {userId})
                setQueues(data)
            }
            getQueue();
        }   

    }, [])

    return (
        <Container>
            <ContentContainer>
                <Header email={userEmail}/>
                <Top count={queues.length}/>
                <Queue queues={queues} />
            </ContentContainer>
        </Container>
    );
}