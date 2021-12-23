import React, { useState, useEffect, useContext } from 'react';

import { Container } from './styled'
import deleteI from '../../../../images/profile/delete.svg'
import settingsI from '../../../../images/profile/queueSettings.svg'
import { DescriptionMember, RowContainer } from '../../../../globalStyles';

export default function Members({member, index, handleDelete, setSettings}) {

    function setModalMembersSettings() {
        const settings = {
            member: {
                title: 'Add new member',
                memberId: member.id,
                memberTicket: member.ticket,
                phoneTitle : 'MEMBER PHONE',
                phoneValue: member.phone,
                dateTitle: 'DATE',
                dateValue: member.date,
                phoneAttention: 'Enter phone number in specified format',
                phonePattern: 'Format: +71234567890'
            },
            default: {
                editText: 'Edit'
            }
        }
        setSettings(settings)
        console.log('Set options:', settings)
    }

    return (
        <Container style={index % 2 ? {backgroundColor:"#E6EBF5"} : {backgroundColor:""}}>
            <DescriptionMember> {member.id} </DescriptionMember>
            <DescriptionMember> {member.ticket} </DescriptionMember>
            <DescriptionMember> {member.phone} </DescriptionMember>
            <DescriptionMember> {member.date} </DescriptionMember>


            <RowContainer>
                <DescriptionMember style={{marginRight:"30px"}}> {member.time} </DescriptionMember> 
                <img src={settingsI} onClick={() => setModalMembersSettings(member.id)} style={{marginRight:"10px"}} alt="settings"/>
                <img src={deleteI} onClick={() => handleDelete(member.id)} alt="delete"/>
            </RowContainer>           
        </Container>
    );
}