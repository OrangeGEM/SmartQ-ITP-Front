import React, { useEffect, useState, useContext } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { AuthContext } from './context/auth.context.js';
import { useAuth } from './hooks/auth.hook.js';

import LP from './pages/LP/LP.jsx';
import SignIn from './pages/Auth/SignIn/SignIn.jsx'
import SignUp from './pages/Auth/SignUp/SignUp.jsx'
//import Profile from './pages/Profile/Profile.jsx'

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
  const {token, login, logout, userId} = useAuth()
  const { user } = useContext(AuthContext)
  const isAuthenticated = token

  console.log(isAuthenticated)
  return (
    <AuthContext.Provider value={{ token, login, logout, userId }}>
    <BrowserRouter>
      <GlobalStyles />
      { isAuthenticated ?
        <>
          <Routes>
            <Route path="/" element={<LP />} exact />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </> : <>
          <Routes>
            <Route path="/" element={<LP />} exact />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            {/* <Route path="/profile" element={<Profile />} /> */}
          </Routes>
        </>
      }   
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

