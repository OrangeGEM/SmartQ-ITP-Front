import React, { useState, useEffect, useContext } from 'react';
import { ColumnContainer, DescriptionText, ProfileTitleText, QueueKeyword, QueueTitleText, RowContainer } from '../../../../globalStyles';

import { Container } from './styled'

import key from '../../../../images/profile/key.svg'
import group from '../../../../images/profile/group.svg'
import arrow from '../../../../images/profile/arrow.svg'

export default function Queues({ queue }) {
    console.log(queue)
    return (
        <>
        {
            queue.wrap ? (
                <Container style={{ backgroundColor: "#E6EBF5" }}>
                    <RowContainer style={{ justifyContent: "space-between", width: "100%" }}>
                        <ColumnContainer>
                            <QueueTitleText style={{ marginBottom: "15px" }}> {queue.title} </QueueTitleText>
                            <RowContainer style={{ alignItems: "baseline" }}>
                                <img src={key} />
                                <QueueKeyword> {queue.key} </QueueKeyword>
                            </RowContainer>
                            <DescriptionText> {queue.desc} </DescriptionText>
                        </ColumnContainer>
                        <ColumnContainer>
                            <RowContainer style={{ alignSelf: "flex-end", marginBottom: "15px" }}>
                                <img src={group} />
                                <ProfileTitleText style={{ marginLeft: "7px" }}> {queue.units.length} </ProfileTitleText>
                            </RowContainer>
                            <DescriptionText> {queue.time} </DescriptionText>
                        </ColumnContainer>
                    </RowContainer>
                </Container>
            ) : (
                <Container style={{ backgroundColor: "#D6E0F0" }}>
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