import {useState, useCallback, useEffect, useContext} from 'react'
import { useHttp } from './http.hook'

export const useAuth = () => {
    const { request } = useHttp();
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
        async function verifyUser() {
            try {
                const data = await request(`${process.env.REACT_APP_API_URL}/api/auth/verify`, 'POST') 

                if(data.id){
                    login(data.id, data.email)
                }
            } catch(e) {
                console.log(e)
            }
        }
        verifyUser();
    }, [login])

    return {login, logout, userId, userEmail}
}