import React from 'react';
import { useNavigate } from 'react-router';
import { HeaderContainer, Icon, Image, RowContainer, TitleText } from '../styled';
import logo from '../../../images/profile/logo.svg';
import exit from '../../../images/profile/exit.svg';

import { useHttp } from '../../../hooks/http.hook'
import { useAuth } from '../../../hooks/auth.hook'

export default function Header({ email }) {
    const { request } = useHttp();
    const { logout } = useAuth();
    const navigate = useNavigate();
    async function Logout() {
        const data = await request(`${process.env.REACT_APP_API_URL}/api/auth/logout`, 'POST');
        console.log(data);
        logout();
        navigate('/')
    }   
    
    return (
        <HeaderContainer>
            <Image src={logo}/>
            <RowContainer>
                <TitleText> { email } </TitleText>
                <Icon src={exit} style={{"cursor":"pointer"}} onClick={ () => Logout() }/>
            </RowContainer>
        </HeaderContainer>
    );
}