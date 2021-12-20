import React, { useState, useEffect, useContext } from 'react';

import { Container } from './styled'
import plus from '../../../images/profile/add.svg'
import { ColumnContainer, ProfileAddQueue, ProfileTitleText, ProfileTotalQueue, RowContainer } from '../../../globalStyles';

export default function Top({ count }) {

    return (
        <Container>
            <ColumnContainer>
                <ProfileTitleText> My queues </ProfileTitleText>
                <ProfileTotalQueue> Total: {count} </ProfileTotalQueue>
            </ColumnContainer>

            <RowContainer style={{alignItems:"center"}}>
                <ProfileAddQueue> ADD NEW QUEUE </ProfileAddQueue>
                <img src={plus} style={{width:"19px", height:"19px", cursor:"pointer"}}/>
            </RowContainer>
        </Container>
    );
}