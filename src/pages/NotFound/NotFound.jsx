import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router';
import { Container, GoHome, Subtitle, TitleText } from './styled'
import {  } from '../../globalStyles';

export default function NotFound() {
    const navigate = useNavigate();
    return (
        <Container>
            <TitleText> 404 </TitleText> 
            <Subtitle> page not found </Subtitle>
            <GoHome  value="Go home" type="button" onClick={() => { navigate('/') }}/>
        </Container>
    );
}