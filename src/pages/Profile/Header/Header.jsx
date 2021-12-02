import React from 'react';

import { HeaderContainer, Icon, Image, RowContainer, TitleText } from '../styled';
import logo from '../../../images/profile/logo.svg';
import exit from '../../../images/profile/exit.svg';

export default function Header() {

    
    return (
        <HeaderContainer>
            <Image src={logo}/>
            <RowContainer>
                <TitleText> testemail@email.ru </TitleText>
                <Icon src={exit} />
            </RowContainer>
        </HeaderContainer>
    );
}