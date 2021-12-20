import React, { useState, useEffect, useContext } from 'react';
import Queues from './Queues/Queues';
import Members from './Members/Members';
import { Container } from './styled'


export default function Queue({ queues }) {
    return (
        <Container>
            {
                queues ? queues.map((item) => {
                    return (<Queues  queue={item}></Queues>)
                }) : <></>
            }
            {
                
            }
        </Container>
    );
}