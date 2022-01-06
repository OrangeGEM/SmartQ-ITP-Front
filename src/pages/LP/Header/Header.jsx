import React, { useState, useContext, useEffect, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';

import {HeaderContainer, Image, HeaderButton} from "./styled";
import { AuthContext } from '../../../context/auth.context';
import { useHttp } from '../../../hooks/http.hook'
import logo from '../../../images/lpLogo.png'



export default function Header({socket}) {
    const { isAuthenticated } = useContext(AuthContext);
    const navigate = useNavigate(); 
    const [queueCount, setQueueCount] = useState(null);

    useEffect(() => {
        socket?.emit('getQueueCount');
        socket?.on('getQueueCount', (data) => {
            console.log('[SocketIO] -> Emited from server (getQueueCount)', data);
            setQueueCount(data);
        })

        socket?.on('changeQueueCount', (data) => {
            console.log('[SocketIO] -> Emited from server (changeQueueCount)', data);
            setQueueCount(data);
        })
    }, [socket]) 

    return (
        <HeaderContainer>
            <Image src={logo}/>
            <h1> {queueCount ? `Current queue count: ${queueCount}` : `Not connected`} </h1>
           

            <HeaderButton 
                onClick={ e => {isAuthenticated ? navigate('/profile') : navigate('/signin')} } 
                type="button" 
                value={ isAuthenticated ? "MY QUEUES" : "SIGN IN" } 
            />
        </HeaderContainer>
    )
}

