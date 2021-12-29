import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import {HeaderContainer, Image, HeaderButton} from "./styled";
import { AuthContext } from '../../../context/auth.context';
import { useHttp } from '../../../hooks/http.hook'
import logo from '../../../images/lpLogo.png'



export default function Header() {
    const [queueCount, setQueueCount] = useState(0)

    const { isAuthenticated } = useContext(AuthContext);
    const { request } = useHttp();
    const navigate = useNavigate();

    useEffect(() => {
        async function requestQueueCount() {
            const data = await request(`${process.env.REACT_APP_API_URL}/api/landing/queuecount`, 'POST')
            setQueueCount(data.count)
        }
        requestQueueCount();
    },[])

    function handleClick(e) { //delete andsunctionality
        console.log('User authorized: ', isAuthenticated)
        isAuthenticated ? navigate('/profile') : navigate('/signin')
    }

    return (
        <HeaderContainer>
            <Image src={logo}/>
            <h1> Current queue count: {queueCount} </h1>
            <HeaderButton onClick={ e => handleClick(e) } type="button" value={ isAuthenticated ? "MY QUEUES" : "SIGN IN" } />
        </HeaderContainer>
    )
}

