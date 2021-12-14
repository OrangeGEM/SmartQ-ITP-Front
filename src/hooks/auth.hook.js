import {useState, useCallback, useEffect} from 'react'
import { useHttp } from './http.hook'

export const useAuth = () => {
    const[token, setToken] = useState(null)
    const[userId, setUserId] = useState(null)
    const { request } = useHttp();

    const login = useCallback( (jwtToken, id) => {
        setToken(jwtToken)
        setUserId(id)
    }, [])

    const logout = useCallback( () => {
        setToken(null)
        setUserId(null)
    }, [])

    useEffect(() => {
        try {
            async function verifyUser() {
                const data = await request(`${process.env.REACT_APP_API_URL}/api/auth/verify`, 'POST') 
                if(data && data.token){
                    login(data.token, data.userId)
                }
            }
            verifyUser();
        } catch(e) {
            console.log(e)
        }
    }, [login])

    return {login, logout, token, userId}
}