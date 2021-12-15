import React from 'react';

import { createBrowserHistory } from 'history';
import { HeaderContainer, Icon, Image, RowContainer, TitleText } from '../styled';
import logo from '../../../images/profile/logo.svg';
import exit from '../../../images/profile/exit.svg';

import { useHttp } from '../../../hooks/http.hook'

export default function Header({ email }) {
    const { request } = useHttp();
    let history = createBrowserHistory();
    async function Logout() {
        const data = await request(`${process.env.REACT_APP_API_URL}/api/auth/logout`, 'POST');
        console.log(data);
        history.push('/')
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