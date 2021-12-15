import {useState, useCallback, useEffect} from 'react'

export const useError = () => {
    const[errorTitle, setErrorTitle] = useState(null)
    const[errorMessage, setErrorMessage] = useState(null)

    const setError = useCallback((title, message) => {
        //console.log('Errors in Hook: ', title, message)
        setErrorTitle(title);
        setErrorMessage(message);
    })

    return { errorTitle, errorMessage, setError }
}