import React from 'react';

import { TopContainer, Icon, ColumnContainer, RowContainer, TitleText, DescriptionText, ActionText } from '../styled';
import add from '../../../images/profile/add.png';

export default function Top(props) {
    const countQueue = props.data;
    
    return (
        <TopContainer>
            <ColumnContainer>
                <TitleText> My queues </TitleText>
                <DescriptionText> Total: {countQueue} </DescriptionText>
            </ColumnContainer>
            <RowContainer>
                <ActionText> ADD NEW QUEUE </ActionText>
                <Icon src={add} style={{'width':'20px', 'height':'20px', 'margin-left':'15px'}}/>
            </RowContainer>
        </TopContainer>
    );
}