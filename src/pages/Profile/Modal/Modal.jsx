import React, { useState, useEffect, useContext } from 'react';
import { ActionText, AttentionTextModal, ColumnContainer, InputsTitleModal, RowContainer, TitleModal } from '../../../globalStyles';

import { Container, Content, InputContainer, InputField, Field, TextArea } from './styled'
import key from '../../../images/profile/key.svg'

export default function Modal({settings, setSettings}) {

    function handleSubmit(e) {
        e.preventDefault();
        const target = e.target
        console.log(e.target.phone.value)
    }

    return (
        settings.hasOwnProperty('queue') ? (
            <Container onClick={() => setSettings(null)}>
                <Content onSubmit={ e => handleSubmit(e) } onClick={ e => e.stopPropagation() }>
                    <TitleModal> {settings.queue.title} </TitleModal>

                    <InputContainer>
                        <InputsTitleModal> { settings.queue.nameTitle } </InputsTitleModal>
                        <InputField name="name" placeholder={settings.queue.nameValue}/>
                    </InputContainer>

                    <InputContainer>
                        <InputsTitleModal> { settings.queue.keywordTitle } </InputsTitleModal>
                        <Field>   
                            <img src={key} style={{marginRight:"5px"}} alt="key"/>
                            <InputField name="keyword" style={{ padding:0, width:"95%", background:"inherit" }} placeholder={settings.queue.keywordValue} />
                        </Field>
                        <AttentionTextModal> {settings.queue.keywordAttention} </AttentionTextModal>
                    </InputContainer>

                    <InputContainer>
                        <InputsTitleModal> { settings.queue.descriptionTitle } </InputsTitleModal>
                        <TextArea name="description" defaultValue={settings.queue.descriptionValue} />
                    </InputContainer>
                    
                    <RowContainer style={{justifyContent:"space-between", marginTop:"30px"}}>
                        <ActionText type="submit"> {settings.default.actionText} </ActionText>
                        {settings.default.editText ? (<ActionText type="submit"> {settings.default.editText} </ActionText>) : <></>}
                        <ActionText style={{color:"#393B44"}} onClick={() => setSettings(null)}> CLOSE </ActionText>
                    </RowContainer>

                </Content>
            </Container>
        ) : settings.hasOwnProperty('member') ? (
            <Container onClick={() => setSettings(null)}>
                <Content onSubmit={ e => handleSubmit(e) } onClick={ e => e.stopPropagation() }>
                    <TitleModal> {settings.member.title} </TitleModal>
                    <InputContainer>
                        <InputContainer>
                            <InputsTitleModal> { settings.member.phoneTitle } </InputsTitleModal>
                            <InputField name="phone" placeholder={ settings.member.phoneValue } type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
                            <AttentionTextModal> {settings.member.phonePattern} </AttentionTextModal>
                            <AttentionTextModal style={{margin:0}}> {settings.member.phoneAttention} </AttentionTextModal>
                        </InputContainer>

                        <InputContainer>
                            <InputsTitleModal> { settings.member.dateTitle } </InputsTitleModal>
                            <InputField name="date" placeholder={ settings.member.dateValue } type="datetime-local"/>
                        </InputContainer>
                    </InputContainer>
                   
                    <RowContainer style={{justifyContent:"space-between", marginTop:"30px"}}>
                        <ActionText type="submit"> {settings.default.actionText} </ActionText>
                        {settings.default.editText ? (<ActionText type="submit"> {settings.default.editText} </ActionText>) : <></>}
                        <ActionText style={{color:"#393B44"}} onClick={() => setSettings(null)}> CLOSE </ActionText>
                    </RowContainer>

                </Content>
            </Container>
        ) : <></>
        
    );  
}