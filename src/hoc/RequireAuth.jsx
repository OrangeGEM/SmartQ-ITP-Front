import React, { useEffect, useState, useContext } from 'react';
import {useLocation, Navigate } from "react-router-dom";
import { AuthContext } from '../context/auth.context';

export function RequireAuth({ children }) {
    const { isAuthenticated } = useContext(AuthContext)
    const location = useLocation();

    if(!isAuthenticated) {
        return <Navigate to="/signin" state={{from: location.pathname}} />
    }

    return children;
}