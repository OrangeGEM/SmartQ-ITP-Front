import React, { useState, useEffect, useContext } from 'react';
import { ColumnContainer, DescriptionText, ProfileTitleText, QueueKeyword, QueueTitleText, RowContainer } from '../../../../globalStyles';
import { useDate } from '../../../../hooks/date.hook';
import { Container } from './styled'

import key from '../../../../images/profile/key.svg'
import group from '../../../../images/profile/group.svg'
import arrow from '../../../../images/profile/arrow.svg'
import deleteI from '../../../../images/profile/queueDelete.svg'
import settingsI from '../../../../images/profile/queueSettings.svg'

export default function Queues({ queue, handleWrap, setSettings }) {
    const { setQueueTime } = useDate();

    function handleEdit() {
        const settings = {
            queue: {
                title: 'Add new queue',
                nameTitle : 'QUEUE NAME',
                nameValue: queue.title,
                keywordTitle: 'KEYWORD',
                keywordValue: queue.keyword,
                dateTitle: 'DATE',
                dateValue: new Date(queue.date),
                descriptionTitle : 'DESCRIPTION',
                descriptionValue: queue.description,
            },
            default: {
                actionText: 'Delete',
                editText: 'Edit'
            }
        }
        setSettings(settings)
        //console.log('Set options:', settings)
    }

    //console.log(queue)
    return (
        <>
        {
            queue.wrap ? (
                <Container style={{ backgroundColor: "#D6E0F0" }}>
                    <RowContainer style={{ justifyContent: "space-between", width: "100%" }}>
                        <ColumnContainer>
                            <QueueTitleText style={{ marginBottom: "15px" }}> {queue.title} </QueueTitleText>
                            <RowContainer style={{ alignItems: "baseline" }}>
                                <img src={key} style={{ width:"11px", height:"11px" }}/>
                                <QueueKeyword> {queue.keyword} </QueueKeyword>
                            </RowContainer>
                            <DescriptionText> {queue.description} </DescriptionText>
                        </ColumnContainer>
                        <ColumnContainer>
                            <RowContainer style={{justifyContent:"flex-end", marginBottom:"10px"}}>
                                <img src={settingsI} style={{width:"21px", height:"21px", cursor:"pointer"}} onClick={() => handleEdit()}/>
                            </RowContainer>
                            <RowContainer style={{ alignSelf: "flex-end", marginBottom: "15px" }}>
                                <img src={group} /> 
                                <ProfileTitleText style={{ marginLeft: "7px" }}> {/*queue.units.length*/} 0 </ProfileTitleText>
                            </RowContainer>
                            <DescriptionText> {setQueueTime(queue.date)} </DescriptionText>
                        </ColumnContainer>
                    </RowContainer>
                </Container>
            ) : (
                <Container style={{ backgroundColor: "#E6EBF5" }} onClick={(e) => {handleWrap(queue)}}>
                    <RowContainer style={{ width: "100%", justifyContent: "space-between", alignItems: "center" }}>
                        <QueueTitleText> {queue.title} </QueueTitleText>
                        <img src={arrow} />
                    </RowContainer>
                </Container>
            )
        }
        </>
    );
}