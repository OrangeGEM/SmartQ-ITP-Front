import React from 'react';

import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';

import styled from "styled-components";
import { device } from '../../breakpoint'

const Conteiner = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
`;

const ContentContainer = styled.div`
    width: 90%;
    height: 100vh;
    display: flex;
    flex-direction: column;

    @media ${device.laptop} {
        width: 98%;
    }
`;

export default function LP() {
    return (
        <Conteiner>
            <ContentContainer>
                <Header />
                <Main />
                <Footer />
            </ContentContainer>
        </Conteiner>
    )
}