import React from 'react';

import {HeaderContainer, Image, HeaderButton} from "../styled";

import logo from '../../../images/lpLogo.png'

export default function Header() {
    return (
        <HeaderContainer>
            <Image src={logo}/>
            <HeaderButton onClick={console.log('click')} type="button" value="MY QUEUES" readOnly />
        </HeaderContainer>
    )
}