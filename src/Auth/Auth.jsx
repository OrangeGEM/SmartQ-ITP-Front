import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";

import SignIn from './SignIn/SignIn.jsx';
import SignUp from './SignUp/SignUp.jsx';

export default function Auth() {
    return (
        <SignUp />
    )
}