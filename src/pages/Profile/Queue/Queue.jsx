import React, { useState, useEffect, useContext } from 'react';
import Queues from './Queues/Queues';
import Members from './Members/Members';
import { Container } from './styled'


export default function Queue({ queues }) {
    const [members, setMembers] = useState([])
    
    useEffect(() => {
        setMembers(queues.find((obj) => { return (obj.wrap === true) })?.units);
    }, [queues])


    return (
        <Container>
            {
                queues ? queues.map((item) => {
                    return (<Queues  queue={item}></Queues>)
                }) : <></>
            }

            {   
                members ? members.map((item) => {
                    return (<Members member={item}></Members>)
                }) : <></>
            }
        </Container>
    );
}