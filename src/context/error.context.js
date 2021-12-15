import { createContext } from 'react'

function noop() {}

export const ErrorContext = createContext({
    errorTitle: '',
    errorMessage: '',
    setError : noop
})