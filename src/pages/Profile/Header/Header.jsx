import React from 'react';

import { HeaderContainer, Icon, Image, RowContainer, TitleText } from '../styled';
import logo from '../../../images/profilelogo.png';
import exit from '../../../images/profile/exit.png';

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