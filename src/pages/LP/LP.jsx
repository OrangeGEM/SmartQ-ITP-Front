import React from 'react';
import { Link } from "react-router-dom";

import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';


import styled from "styled-components";

const Conteiner = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export default function LP() {
    return (
        <Conteiner>
            <Header />
            <Main />
            <Footer />
        </Conteiner>
    )
}