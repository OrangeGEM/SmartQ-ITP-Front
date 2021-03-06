
import React, { useState, useContext } from 'react';
import { Link, useNavigate, useLocation } from "react-router-dom";

import { Container, AuthContainer, Image, FormContainer, InputField, ButtonField, LinkText, FooterContainer } from '../styled';
import logo from '../../../images/Auth-logo.png';

import { useHttp } from '../../../hooks/http.hook'

import { AuthContext } from '../../../context/auth.context'
import { ErrorContext } from '../../../context/error.context';


import ErrorMessage from '../../../ErrorMessage/ErrorMessage.jsx'

export default function SignIn() {
    const { request } = useHttp();
    const navigate = useNavigate();
    const location = useLocation(); 

    const fromPage = location?.state?.from?.pathname || '/';

    const auth = useContext(AuthContext);
    const error = useContext(ErrorContext);

    console.log('Auth context: ', auth)
    //console.log('Error context: ', error)

    async function SendData(e) {
        e.preventDefault()
        const target = e.target;
        //console.log(target)
        let form = {
            'email': target.email.value,
            'password': target.password.value,
        }

        try {
            if(form.password.length < 6)
                throw new SyntaxError("Данные некорректны");

            //console.log('data send: ', form);
            const data = await request(`${process.env.REACT_APP_API_URL}/api/auth/login`, 'POST', {...form})

            //console.log('data recevied: ', data);
            if(data.accessToken && data.refreshToken) {
                //console.log(data.userDto.id)
                auth.login(data.userDto.id)
                navigate('/profile')
            }

        } catch(e) {
            error.setError( 'HTTP Error', e.message)
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