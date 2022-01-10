import React, { useState, useEffect, useContext } from 'react';
import { ActionText, ProfileTitleText, RowContainer } from '../../../globalStyles';

import { Container, Content } from './styled';

import userIcon from '../../../images/profile/usericon.svg'

export default function Header({email}) {

    return (
        <Container>
            <Content>
                <RowContainer style={{alignItems:"center"}}>
                    <img src={userIcon} style={{width:"25px", height:"25px", marginRight:"5px"}}/>
                    <ProfileTitleText> User: {email} </ProfileTitleText>
                </RowContainer>
                <ActionText style={{marginRight:"10px"}}> Exit/Save </ActionText>
            </Content>
        </Container>
    );
}