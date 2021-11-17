import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import LP from './LP/LP.jsx';
import Auth from './Auth/Auth.jsx'

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
        <Route path="/" element={<LP />} exact/>
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
}

