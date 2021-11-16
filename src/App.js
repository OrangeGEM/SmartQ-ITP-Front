import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import LP from './LP/LP.jsx';
import Auth from './Auth/Auth.jsx';

const GlobalStyles = createGlobalStyle`
  body{
    margin: 0;
  }
`;

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LP />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
}

