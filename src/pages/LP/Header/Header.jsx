import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import {HeaderContainer, Image, HeaderButton} from "./styled";
import { AuthContext } from '../../../context/auth.context';
import logo from '../../../images/lpLogo.png'



export default function Header() {
    const { isAuthenticated } = useContext(AuthContext);
    const navigate = useNavigate();

    function handleClick(e) { //delete and add functionality
        console.log('User authorized: ', isAuthenticated)
        isAuthenticated ? navigate('/profile') : navigate('/signin')
    }

    return (
        <HeaderContainer>
            <Image src={logo}/>
            <HeaderButton onClick={ e => handleClick(e) } type="button" value={ isAuthenticated ? "MY QUEUES" : "SIGN IN" } />
        </HeaderContainer>
    )
}

