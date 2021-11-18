import React from 'react';
import { Link } from "react-router-dom";


import { Container, AuthContainer, Image, FormContainer, InputField, ButtonField, LinkText, FooterContainer } from '../styled';
import logo from '../../../images/Auth-logo.png';


function testMessage() {
    console.log("Test");
}

export default function SignIn() {
    return (
        <Container>
            <AuthContainer>
                <Image src={logo} />
                <FormContainer>
                    <InputField type="email" placeholder="Email"></InputField>
                    <InputField type="password" placeholder="Password"></InputField>
                    <ButtonField type="button" onClick={testMessage} value="SIGN IN" />
                    <LinkText to="/forgot"> FORGOT PASSWORD? </LinkText>
                </FormContainer>
                <FooterContainer>
                    Don’t have an accaunt?
                    <LinkText to="/registration"> SIGN UP</LinkText>
                </FooterContainer>
            </AuthContainer>
        </Container>
    )
}