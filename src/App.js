import React, { useEffect, useState, useContext } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { io } from 'socket.io-client';

import { createGlobalStyle } from "styled-components";

import { AuthContext } from './context/auth.context.js';
import { useAuth } from './hooks/auth.hook.js';
import { ErrorContext } from './context/error.context';
import { useError } from './hooks/error.hook.js';


import LP from './pages/LP/LP.jsx';
import SignIn from './pages/Auth/SignIn/SignIn.jsx'
import SignUp from './pages/Auth/SignUp/SignUp.jsx'

import Profile from './pages/Profile/Profile.jsx';
import ErrorMessage from './ErrorMessage/ErrorMessage.jsx';

const GlobalStyles = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
    font-family: DM Mono;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    background-color: #F1F3F8;
  }
`;

export default function App() {

  const {login, logout, userId, userEmail} = useAuth()
  const isAuthenticated = !!userId
  
  const ErrorHandler = useContext(ErrorContext)
  const { errorTitle, errorMessage, setError } = useError()

  useEffect(() => {
    const socket = io('http://localhost:5001', {
      withCredentials: true
    })
  }, [])


  //console.log(AuthContext)
  //console.log(isAuthenticated)
  // console.log(ErrorHandler)
  return (
    <AuthContext.Provider value={{ userId, userEmail, login, logout, isAuthenticated }}>
    <ErrorContext.Provider value={{errorTitle, errorMessage, setError}} >
    <ErrorMessage />
    <BrowserRouter>
      <GlobalStyles />
      { isAuthenticated ?
        <>
          <Routes>
            <Route path="/" element={<LP />} exact />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </> : <>
          <Routes>
            <Route path="/" element={<LP />} exact />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </>
      }   
      </BrowserRouter>
    </ErrorContext.Provider>
    </AuthContext.Provider>
  );
}

