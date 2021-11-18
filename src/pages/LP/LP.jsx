import React from 'react';
import { Link } from "react-router-dom";


import Footer from './Footer/Footer';
import Header from './Header/Header';

import styled from "styled-components";

const Conteiner = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center
`;

export default function LP() {
    return (
        <Conteiner>
            <Link to="/auth">Auth</Link>
        </Conteiner>
    )
}