import React, { useState, useEffect, useContext } from 'react';
import { useHttp } from '../../../hooks/http.hook';
import { Container } from './styled'
import plus from '../../../images/profile/add.svg'
import { ColumnContainer, ProfileAddQueue, ProfileTitleText, ProfileTotalQueue, RowContainer } from '../../../globalStyles';

export default function Top({ count, setSettings, queues, setQueues, setSubmitModal }) {
    const { request } = useHttp();

    function setModalQueuesSettings() {
        const settings = {
            queue: {
                title: 'Add new queue',
                nameTitle : 'QUEUE NAME',
                nameValue: '',
                keywordTitle: 'KEYWORD',
                keywordValue: '',
                dateTitle: 'DATE',
                dateValue: '',
                descriptionTitle : 'DESCRIPTION',
                descriptionValue: '',
            },
            default: {
                actionText: 'Create',
                editText: ''
            }
        }
        setSettings(settings)
        //console.log('Set options:', settings)
    }

    function setModalMembersSettings() {
        const settings = {
            member: {
                title: 'Add new member',
                phoneTitle : 'MEMBER PHONE',
                phoneValue: '',
                dateTitle: 'DATE',
                dateValue: '',
                phoneAttention: 'Enter phone number in specified format',
                phonePattern: 'Format: +71234567890'
            },
            default: {
                actionText: 'Create',
                editText: ''
            }
        }
        setSettings(settings)
        console.log('Set options:', settings)
    }
    
    async function handleResetMembers() {
        setSubmitModal(true)
    }

    return (
        <Container>
            <ColumnContainer>
                <ProfileTitleText> My queues </ProfileTitleText>
                <ProfileTotalQueue> Total: {count} </ProfileTotalQueue>
            </ColumnContainer>
            <ColumnContainer style={{alignItems:"flex-end"}}>
                <RowContainer style={{alignItems:"center", marginBottom:"10px"}} onClick={setModalQueuesSettings}>
                    <ProfileAddQueue> ADD NEW QUEUE </ProfileAddQueue>
                    <img src={plus} style={{width:"19px", height:"19px", cursor:"pointer"}}/>
                </RowContainer>

                <RowContainer   
                    name="member" 
                    style={queues.find(item => item.wrap === true)?.wrap ? {visibility:"visible", alignItems:"center", marginBottom:"10px"} : {visibility:"hidden", alignItems:"center", marginBottom:"10px"}} 
                    onClick={setModalMembersSettings}
                >
                    <ProfileAddQueue> ADD NEW MEMBER </ProfileAddQueue>
                    <img src={plus} style={{width:"19px", height:"19px", cursor:"pointer"}}/>
                </RowContainer>

                <RowContainer 
                    name="nulling" 
                    style={queues.find(item => item.wrap === true)?.wrap ? {visibility:"visible", alignItems:"center"} : {visibility:"hidden", alignItems:"center"}} 
                    onClick={handleResetMembers}
                >
                    <ProfileAddQueue> RESET ALL MEMBERS </ProfileAddQueue>
                </RowContainer>
            </ColumnContainer>
        </Container>
    );
}