import React, { useState, useEffect, useContext } from 'react';

import { Container } from './styled'
import deleteI from '../../../../images/profile/delete.svg'
import settingsI from '../../../../images/profile/queueSettings.svg'
import { DescriptionMember, RowContainer } from '../../../../globalStyles';

export default function Members({member, index, handleDelete}) {

    return (
        <Container style={index % 2 ? {backgroundColor:"#E6EBF5"} : {backgroundColor:""}}>
            <DescriptionMember> {member.id} </DescriptionMember>
            <DescriptionMember> {member.ticket} </DescriptionMember>
            <DescriptionMember> {member.phone} </DescriptionMember>

            <RowContainer>
                <DescriptionMember style={{marginRight:"30px"}}> {member.time} </DescriptionMember> 
                <img src={settingsI} style={{marginRight:"10px"}} alt="settings"/>
                <img src={deleteI} onClick={() => handleDelete(member.id)} alt="delete"/>
            </RowContainer>           
        </Container>
    );
}