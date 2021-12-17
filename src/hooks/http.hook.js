import {useState, useCallback, useContext} from 'react'

export const useHttp = () => {
    const request = useCallback ( async (url, 
                                        method='GET', 
                                        body=null, 
                                        headers= {}) => {
        try {
            if(body) {
                body = JSON.stringify(body);
                headers['Content-Type'] = 'application/json';
            }
            const response = await fetch(url, {method, body, headers, credentials: 'include'},);
            const data = await response.json();

            if(!response.ok) {
                console.log('Catch: ', data.message)
            }

            return data;
        } catch (e) {
            console.log('catch e: \n', e.message);
            throw e;
        }
    }, [])

    return { request };
}