import {useState, useCallback, useEffect, useContext} from 'react'
import { useHttp } from './http.hook'

import { ErrorContext } from '../context/error.context';

export const useAuth = () => {
    const { request } = useHttp();
    const { setError } = useContext(ErrorContext)
    const[userId, setUserId] = useState(null)
    const[userEmail, setUserEmail] = useState(null)

    const login = useCallback( (id, email) => {
        setUserId(id)
        setUserEmail(email)
    }, [])

    const logout = useCallback( () => {
        setUserId(null)
    }, [])

  

    useEffect(() => {
        try {
            async function verifyUser() {
                const data = await request(`${process.env.REACT_APP_API_URL}/api/auth/verify`, 'POST') 
                if(!data.ok) {
                    setError('HTTP Error', data.message)
                }

                if(data.id){
                    login(data.id, data.email)
                    console.log(userId, userEmail)
                }
            }
            verifyUser();
        } catch(e) {
            console.log(e.message)
        }
    }, [login])

    return {login, logout, userId, userEmail}
}