import React from 'react';
import { Link } from "react-router-dom";


import { Container, AuthContainer, Image, FormContainer, InputField, ButtonField, LinkText, FooterContainer, FooterForm } from '../styled';

import logo from '../../../images/Auth-logo.png';
import facebook from '../../../images/Facebook.png';
import google from '../../../images/Google.png';

import { useHttp } from '../../../hooks/http.hook'

export default function SignUp() {
    const { request } = useHttp();


    async function SendData(e) {
        e.preventDefault()
        const target = e.target;
        let form = {
            'email' : target.email.value,
            'password' : target.password.value,
            'rpassword' : target.rpassword.value
        }

        try {
            console.log(form);
            const data = await request('/api/auth/register', 'POST', {...form})
            console.log(data.message);
        } catch(e) {
            console.log()
        }

    }




    return (
        <Container>
            <AuthContainer>
                <Image src={logo} />
                <FormContainer onSubmit={SendData}>
                    <InputField type="email" placeholder="Email" name="email"></InputField>
                    <InputField type="password" placeholder="Password" name="password"></InputField>
                    <InputField type="password" placeholder="Repeat password" name="rpassword"></InputField>
                    <ButtonField type="submit" value="SIGN UP" />
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