import React, { useState } from 'react';

import { ErrorContainer } from "./styled";

export default function ErrorMessage(props) {
    const data = props.error;

    console.log(data);
    return (
        Object.keys(data).length ? (
            <ErrorContainer>
                <h2> { data[0].httpError } </h2>
                <h2> { data[0].httpMessage } </h2>
            </ErrorContainer>
        ) : (<></>)
    )
}