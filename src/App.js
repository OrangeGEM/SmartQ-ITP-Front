import React, { useEffect, useState, useContext, useLayoutEffect } from 'react';
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

import { RequireAuth } from './hoc/RequireAuth.jsx'

import LP from './pages/LP/LP.jsx';
import SignIn from './pages/Auth/SignIn/SignIn.jsx'
import SignUp from './pages/Auth/SignUp/SignUp.jsx'

import Profile from './pages/Profile/Profile.jsx';
import ErrorMessage from './ErrorMessage/ErrorMessage.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';

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

  const [socket, setSocket] = useState();

    useLayoutEffect(() => {
        const fetchSocket = async () => {
            const openSocket = await io('http://localhost:5001', {
                withCredentials: true
            })
            await setSocket(openSocket);
            console.log('Socket connected');
            console.log(openSocket);
        }
        fetchSocket();
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
      
        <Routes>
          <Route path="/" element={<LP socket={socket}/>} exact />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/profile" element={ 
            <RequireAuth>
              <Profile socket={socket}/>
            </RequireAuth>
          } />
        </Routes>
      </BrowserRouter>
    </ErrorContext.Provider>
    </AuthContext.Provider>
  );
}

