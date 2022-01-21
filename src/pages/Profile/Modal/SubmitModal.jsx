import React, { useState, useEffect, useContext } from 'react';
import { ActionText, AttentionTextModal, ColumnContainer, InputsTitleModal, RowContainer, TitleModal } from '../../../globalStyles';
import { useHttp } from '../../../hooks/http.hook';
import { Container, Content, InputContainer, InputField, Field, TextArea } from './styled'

export default function SubmitModal({setSubmitModal, queues, setQueues}) {
    const { request } = useHttp();

    async function handleResetMembers() {
        const queue = queues.find((item) => item.wrap === true)
        const data = await request(`${process.env.REACT_APP_API_URL}/api/profile/resetmembers`, 'POST', {id: queue._id});
        console.log(data);

        queues.forEach(element => {
            if(element._id == queue._id) {
                element = Object.assign(element, data.queue)
                element.wrap = true;
            }
        });
        setQueues([...queues]);
        setSubmitModal(false);
    }

    return (
        <Container onClick={() => setSubmitModal(false)}>
            <Content onSubmit={null} onClick={e => e.stopPropagation()} style={{width:"300px", height:"100px", alignItems:"center"}}>
                <TitleModal> Delete all members? </TitleModal>
                <TitleModal> Current count: {queues.find((item) => item.wrap === true)?.units.filter( item => item.active === true).length} </TitleModal>
                <ActionText type="button" onClick={handleResetMembers}> DELETE </ActionText>
            </Content>
        </Container>
    );  
}