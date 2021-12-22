import React, { useState, useEffect, useContext } from 'react';

import Queues from './Queues/Queues';
import Members from './Members/Members';

import { useHttp } from '../../../hooks/http.hook'

import { Container, QueuesContainer, MembersContainer } from './styled'

export default function Queue({ queues, setQueues, setSettings }) {
    const [members, setMembers] = useState([])
    const { request } = useHttp();
    useEffect(() => {
        setMembers(queues.find((obj) => { return (obj.wrap === true) })?.units);
    }, [queues])


    function handleWrapQueue(queue) {
        queues.forEach(item => item.wrap = false);
        queues.find(item => {return (item._id == queue._id)}).wrap = true
        setQueues([...queues])
    }

    async function handleDeleteMember(id) {
        try {
            const wrappedQueueId = queues.find(item => { return (item.wrap == true) })._id
            const membersWithDelete = members.filter(item => { return (item.id != id) })

            const data = await request(`${process.env.REACT_APP_API_URL}/api/profile/deletemember`, 'POST', {queueId: wrappedQueueId, members: membersWithDelete})
            if(data) {
                queues.find(item => { return(item._id == wrappedQueueId) }).units = membersWithDelete
                setQueues([...queues])
            }
        } catch(e) {
            console.log('catch e: \n', e.message);
        }
        
    }

    return (
        <Container>
            <QueuesContainer>
            {
                queues ? queues.map((item) => {
                    return (
                        <Queues  
                            queue={item}
                            handleWrap={handleWrapQueue}
                            setSettings={setSettings}
                        />
                    )
                }) : <></>
            }
            </QueuesContainer>
            <MembersContainer>
            {   
                members ? members.map((item, index) => {
                    return (
                        <Members 
                            member={item} 
                            index={index} 
                            handleDelete={handleDeleteMember}
                            setSettings={setSettings}
                        />
                    )
                }) : <></>
            }
            </MembersContainer>
        </Container>
    );
}