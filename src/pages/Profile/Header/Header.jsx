import React, { useState, useEffect, useContext } from 'react';

import { Container, EmailContainer } from './styled'

import logo from '../../../images/profilelogo.png'
import exit from '../../../images/profile/exit.svg'

import { ProfileTitleText, RowContainer } from '../../../globalStyles';

export default function Header({ email }) {

    return (
        <Container>
            <img src={logo}/>

            <EmailContainer>
                <ProfileTitleText style={{marginRight: "25px"}}> {email} </ProfileTitleText>
                <img src={exit} />
            </EmailContainer>
        </Container>
    );
}