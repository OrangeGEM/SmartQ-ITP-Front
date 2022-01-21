import React, { useState, useEffect, useContext } from 'react';
import { Container } from './styled'
import { ActionText, AttentionTextModal, ColumnContainer, InputsTitleModal, RowContainer, TitleModal } from '../../../globalStyles';
import style from './loadingCircle.css'

export default function Pending({totalCount}) {
    

    return (
        <Container style={{zIndex:"1"}}>
            <div class="cssload-container">
                <div class="cssload-whirlpool"></div>
            </div>

            <InputsTitleModal style={{position:"relative", top:"50px", color:"rgba(219, 219, 219, 1 )"}}> Uploading file {totalCount}% </InputsTitleModal>
        </Container>
    );  
}