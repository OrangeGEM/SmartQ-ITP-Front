import React from 'react';
import { Link } from "react-router-dom";


import { Container, AuthContainer, Image, FormContainer, InputField, ButtonField, LinkText, FooterContainer } from '../styled';
import logo from '../../../images/Auth-logo.png';

import { useHttp } from '../../../hooks/http.hook'


export default function SignIn() {
    const { request } = useHttp();


    async function SendData(e) {
        e.preventDefault()
        const target = e.target;
        console.log(target)
        let form = {
            'email': target.email.value,
            'password': target.password.value,
        }

        try {
            if(form.password.length < 6)
                throw new SyntaxError("Данные некорректны");

            console.log(form);
            const data = await request(`${process.env.REACT_APP_API_URL}/api/auth/login`, 'POST', {...form})
            console.log(data);
        } catch(e) {
            if(e.name == "SyntaxError") {
                console.log("Данные некорректны");
            } else {
                console.log(e)
            }
        }

    }

    return (
        <Container>
            <AuthContainer>
                <Image src={logo} />
                <FormContainer onSubmit={SendData} novalidate>
                    <InputField type="email" name="email" placeholder="Email" novalidate></InputField>
                    <InputField type="password" name="password" placeholder="Password" novalidate></InputField>
                    <ButtonField type="submit" value="SIGN IN" />
                    <LinkText to="/forgot"> FORGOT PASSWORD? </LinkText>
                </FormContainer>
                <FooterContainer>
                    Don’t have an accaunt?
                    <LinkText to="/signup"> SIGN UP</LinkText>
                </FooterContainer>
            </AuthContainer>
        </Container>
    )
}