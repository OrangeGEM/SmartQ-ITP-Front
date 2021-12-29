import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router';
import { Link } from "react-router-dom";

import { Container, AuthContainer, Image, FormContainer, InputField, ButtonField, LinkText, FooterContainer, FooterForm } from '../styled';

import logo from '../../../images/Auth-logo.png';
import facebook from '../../../images/Facebook.png';
import google from '../../../images/Google.png';

import { useHttp } from '../../../hooks/http.hook'

import { AuthContext } from '../../../context/auth.context'

import { ErrorContext } from '../../../context/error.context';
import ErrorMessage from '../../../ErrorMessage/ErrorMessage.jsx'


export default function SignUp() {
    const { request } = useHttp();
    const auth = useContext(AuthContext);
    const error = useContext(ErrorContext);

    const navigate = useNavigate();

    async function SendData(e) {
        e.preventDefault()
        const target = e.target;
        let form = {
            'email' : target.email.value,
            'password' : target.password.value,
            'rpassword' : target.rpassword.value
        }

        try {
            if(form.password.length < 6 || form.password != form.rpassword)
                throw new SyntaxError("Данные некорректны");

            //console.log(form);
            const data = await request(`${process.env.REACT_APP_API_URL}/api/auth/register`, 'POST', {...form})
            //console.log(data);
          
            if(data.accessToken && data.refreshToken) {
                auth.login(data.userDto.id)
                //console.log(auth);
                navigate('/profile');
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
                <FormContainer onSubmit={SendData}>
                    <InputField type="text" placeholder="Email" name="email"></InputField>
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
                    <LinkText to="/signin"> SIGN IN</LinkText>
                </FooterContainer>
            </AuthContainer>
        </Container>
    )
}