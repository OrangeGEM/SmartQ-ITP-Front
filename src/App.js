import React, {useEffect, useState} from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import LP from './pages/LP/LP.jsx';
import SignIn from './pages/Auth/SignIn/SignIn.jsx'
import SignUp from './pages/Auth/SignUp/SignUp.jsx'

const GlobalStyles = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
    font-family: DM Mono;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
  }
`;

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<LP />} exact />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

