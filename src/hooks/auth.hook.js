import {useState, useCallback, useEffect} from 'react'
import { useHttp } from './http.hook'

export const useAuth = () => {
    const { request } = useHttp();
    const[userId, setUserId] = useState(null)
    

    const login = useCallback( (id) => {
        setUserId(id)
    }, [])

    const logout = useCallback( () => {
        setUserId(null)
    }, [])

    useEffect(() => {
        try {
            async function verifyUser() {

                const data = await request(`${process.env.REACT_APP_API_URL}/api/auth/verify`, 'POST') 
                if(data.userId){
                    login(data.userId)
                }
            }
            verifyUser();
        } catch(e) {
            console.log(e)
        }
    }, [login])

    return {login, logout, userId}
}