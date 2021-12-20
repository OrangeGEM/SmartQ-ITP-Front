import React, { useState, useEffect, useContext } from 'react';

import { Container } from './styled'


export default function Members({member}) {
    console.log(member)
    return (
        <Container>
            {member.id}
            {member.ticket}
            {member.phone}
            {member.time}
        </Container>
    );
}