import React, { useState, useContext } from 'react';
import { ErrorContext } from '../context/error.context';
import { ErrorContainer } from "./styled";

export default function ErrorMessage(props) {
    const {errorTitle, errorMessage, setError} = useContext(ErrorContext)
    //console.log( 'Errors in Component: ', errorTitle, errorMessage )
    return (
        errorTitle && errorMessage ? (
            <ErrorContainer>
                <h2> { errorTitle } </h2>
                <h2> { errorMessage } </h2>
            </ErrorContainer>
        ) : <></>
        
    )
}