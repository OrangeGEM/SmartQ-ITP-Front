import React, { useState, useEffect, useContext } from 'react';

import { Container } from './styled'
import plus from '../../../images/profile/add.svg'
import { ColumnContainer, ProfileAddQueue, ProfileTitleText, ProfileTotalQueue, RowContainer } from '../../../globalStyles';

export default function Top({ count, setSettings, queues }) {

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

                {
                    queues.find(item => item.wrap === true)?.wrap ? (
                        <RowContainer name="member" style={{alignItems:"center"}} onClick={setModalMembersSettings}>
                            <ProfileAddQueue> ADD NEW MEMBER </ProfileAddQueue>
                            <img src={plus} style={{width:"19px", height:"19px", cursor:"pointer"}}/>
                        </RowContainer>
                    ) : <></>
                }
            </ColumnContainer>

        </Container>
    );
}