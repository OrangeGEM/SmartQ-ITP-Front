import React from 'react';

import { FooterComponent, FooterContainer } from "./styled";
import { LinkText, TextInfo } from '../../../globalStyles';

export default function Footer() {
    return (
        <FooterContainer>
            <FooterComponent style={{'justifyContent':'space-evenly'}}>
                <LinkText to="/signin"> LOG IN </LinkText>
                <LinkText to="/"> CONTACT US </LinkText>
                <LinkText to="/"> ABOUT </LinkText>
            </FooterComponent>
            <FooterComponent >
                <TextInfo style={{'paddingRight':'20px', 'fontSize':'18px'}}> SmartQ 2020 </TextInfo>
            </FooterComponent>
        </FooterContainer>
    )
}