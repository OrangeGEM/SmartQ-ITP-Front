import React from 'react';

import { FooterComponent, FooterContainer, LinkText, TextInfo } from "../styled";

export default function Footer() {
    return (
        <FooterContainer>
            <FooterComponent style={{'justify-content':'space-evenly'}}>
                <LinkText to="/signin"> LOG IN </LinkText>
                <LinkText to="/"> CONTACT US </LinkText>
                <LinkText to="/"> ABOUT </LinkText>
            </FooterComponent>
            <FooterComponent >
                <TextInfo style={{'padding-right':'20px', 'font-size':'18px'}}> SmartQ 2020 </TextInfo>
            </FooterComponent>
        </FooterContainer>
    )
}