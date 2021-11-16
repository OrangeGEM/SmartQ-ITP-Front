import React from 'react';
import { Link } from "react-router-dom";

import styled from "styled-components";

import logo from '../images/Auth-logo.png';

const Container = styled.div`
    position: absolute;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;

    background-color: #D6E0F0;

    width: 360px;
    heigth: 640px;
    padding: 40px;
`;

const InputContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const TextField = styled.input`
    width: 100%;
    height: 56px;

    background-color: #E6EBF5;
    border: 0;
    margin-bottom: 16px;

    box-sizing: border-box;
    padding-left: 10px;
`;

const ButtonField = styled.button`
    width: 100%;
    height: 56px;

    background-color: #FFA931;
    color: #E6EBF5;

    border: 0;
    padding: 0;

    margin-bottom: 25px;
`;

const LinkText = styled.div`
    color: #FFA931;
`;

const Logo = styled.img`
    width: 80%;
    height: 80%;
    padding-bottom: 25px;
`;


export default function Auth() {
    return (
        <Container>
            <FormContainer>
                <Logo src={logo} />
                <InputContainer>
                    <TextField type="email" placeholder="Email"></TextField>
                    <TextField type="password" placeholder="Password"></TextField>
                    <ButtonField> SIGN IN </ButtonField>
                </InputContainer>
                <Link to="/forgot">
                    <LinkText> FORGOT PASSWORD </LinkText>
                </Link>
            </FormContainer>
        </Container>
        
    )
}