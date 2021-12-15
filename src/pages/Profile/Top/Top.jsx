import React from 'react';

import { TopContainer, Icon, ColumnContainer, RowContainer, TitleText, DescriptionText, ActionText } from '../styled';
import add from '../../../images/profile/add.png';

export default function Top({data, modalActive, setModalActive}) {

    return (
        <TopContainer>
            <ColumnContainer>
                <TitleText> My queues </TitleText>
                <DescriptionText> Total: {data.length} </DescriptionText>
            </ColumnContainer>
            <RowContainer>
                <ActionText onClick={ () => setModalActive(true) }> ADD NEW QUEUE </ActionText>
                <Icon src={add} style={{'width':'20px', 'height':'20px', 'marginLeft':'15px', "cursor":"pointer"}} onClick={ () => setModalActive(true) }/>
            </RowContainer>
        </TopContainer>
    );
}