import React from 'react';
import { Link } from "react-router-dom";


import { Container, AuthContainer, Image, FormContainer, InputField, ButtonField, LinkText, FooterContainer, FooterForm } from '../styled';

import logo from '../../images/Auth-logo.png';
import facebook from '../../images/Facebook.png';
import google from '../../images/Google.png';


export default function Auth() {
    let fieldsValue = {};

    function SendData(e) {
        e.preventDefault()
        const target = e.target;
        fieldsValue = {
            'email' : target.email.value,
            'password' : target.password.value,
            'rpassword' : target.rpassword.value
        }
        console.log(fieldsValue);
    }




    return (
        <Container>
            <AuthContainer>
                <Image src={logo} />
                <FormContainer onSubmit={SendData}>
                    <InputField type="email" placeholder="Email" name="email"></InputField>
                    <InputField type="password" placeholder="Password" name="password"></InputField>
                    <InputField type="password" placeholder="Repeat password" name="rpassword"></InputField>
                    <ButtonField type="submit" value="SIGN IN" />
                    <FooterForm>
                        <Image src={google}/>
                        <Image src={facebook} />
                    </FooterForm>
                </FormContainer>
                <FooterContainer>
                    Have an accaunt?
                    <LinkText to="/Auth"> SIGN IN</LinkText>
                </FooterContainer>
            </AuthContainer>
        </Container>
    )
}