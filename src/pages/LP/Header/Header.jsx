import React from 'react';

import {HeaderContainer, Image, HeaderButton} from "../styled";

import logo from '../../../images/lpLogo.png'

function testingClick() { //delete and add functionality
    console.log('click') 
}

export default function Header() {
    return (
        <HeaderContainer>
            <Image src={logo}/>
            <HeaderButton onClick={testingClick} type="button" value="MY QUEUES" />
        </HeaderContainer>
    )
}

