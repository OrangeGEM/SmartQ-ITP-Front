import { createContext } from 'react'

function noop() {}

export const AuthContext = createContext({
    userId: null,
    userEmail: null,
    login: noop,
    logout: noop,
    isAuthenticated: false
})