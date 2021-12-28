import React, { useState, useEffect, useContext } from 'react';
import { ActionText, AttentionTextModal, ColumnContainer, InputsTitleModal, RowContainer, TitleModal } from '../../../globalStyles';
import { AuthContext } from '../../../context/auth.context'
import { useDate } from '../../../hooks/date.hook';
import { useHttp } from '../../../hooks/http.hook';
import { Container, Content, InputContainer, InputField, Field, TextArea } from './styled'
import key from '../../../images/profile/key.svg'
import redkey from '../../../images/profile/redkey.svg'

export default function Modal({settings, setSettings, queues, setQueues}) {
    const [time, setTime] = useState(new Date())
    const [keywordErrored, setKeywordErrored] = useState(false)
    const [nameErrored, setNameErrored] = useState(false)
    const [PhoneErrored, setPhoneErrored] = useState(false)

    const { userId } = useContext(AuthContext)
    const { request } = useHttp();
    const { setClientTime, setServerTime } = useDate(time);

    async function handleSubmit(e) {
        e.preventDefault();
        const queue = queues.find((item) => item.wrap === true)
        const queueId = queue?._id;
        const target = e.target
        const submitter = e.nativeEvent.submitter.name

        const form = collectData(target, submitter);
        console.log(form)

        if(settings.hasOwnProperty('queue')) {
            const isKeywordErrored = (!!form.keyword === !!queues.find((item) => item.keyword === form.keyword)) || !(form.keyword.replace(/\s/g, ''));
            const isNameErrored = !(form.title.replace(/\s/g, ''));
            setKeywordErrored(isKeywordErrored);
            setNameErrored(isNameErrored);

            if(settings.default.editText === "") {
                //console.log(isKeywordErrored)
                if(!isKeywordErrored && !isNameErrored) {
                    try {
                        const data = await request(`${process.env.REACT_APP_API_URL}/api/profile/createqueue`, 'POST', form)
                        if(data.ok) {
                            form._id = data._id;
                            console.log('Received data:', data)
                            setQueues([...queues, form])
                            setSettings(null)
                        }
                    } catch(e) {
                        console.log(e)
                    }
                }
            } else {  
                if(submitter === "delete") {
                    try {
                        const data = await request(`${process.env.REACT_APP_API_URL}/api/profile/deletequeue`, 'POST', {queueId})
                        if(data.ok) {
                            console.log('Received data:', data)
                            setQueues(queues.filter(item => item._id !== queueId));
                            setSettings(null)
                        }
                    } catch(e) {
                        console.log(e)
                    }
                } else {
                    try {
                        if(!isKeywordErrored && !isNameErrored) {
                            const data = await request(`${process.env.REACT_APP_API_URL}/api/profile/editqueue`, 'POST', {queueId, ...form})
                            if(data.ok) {
                                console.log('Received data:', data)
                                queues.forEach(element => {
                                    if(element._id == queueId) {
                                        element = Object.assign(element, form)
                                    }
                                });
                                setQueues([...queues]);
                                setSettings(null)
                            }
                        }
                    } catch(e) {
                        console.log(e)
                    }
                }
            }
        } else if(settings.hasOwnProperty('member')) {
            const pattern = /[\+]*[7-8]{1}\s?[\(]*9[0-9]{2}[\)]*\s?\d{3}[-]*\d{2}[-]*\d{2}/
            const isPhoneErrored = pattern.test(form.phone);
            setPhoneErrored(!isPhoneErrored)
            console.log(isPhoneErrored)
            try {
                if( isPhoneErrored ) {
                    if(settings.default.editText === "") {
                        const data = await request(
                            `${process.env.REACT_APP_API_URL}/api/profile/createmember`, 'POST', {
                                queue: queue, 
                                member: {phone:form.phone, date: form.date}
                            }
                        );
                        if(data.ok) {
                            console.log('Received data:', data)
                            queues.find(item => item._id === queueId).units.push(data.member)
                            queues.find(item => item._id === queueId).ticketNum = data.ticketNum;
                            setQueues([...queues])
                            setSettings(null)
                        }
                        
                    } else {
                        const data = await request(
                            `${process.env.REACT_APP_API_URL}/api/profile/editmember`, 'POST', {
                                queue: queue,
                                member: form
                            }
                        );
                        if(data.ok) {
                            console.log(data)
                            queues.find(item => item._id === queueId).units = [...data.members]
                            setQueues([...queues])
                            setSettings(null)
                        }
                    }
                }
            } catch(e) {
                console.log(e)
            }
        } else {
            console.log('???')
        }
    }

    function collectData(target, submitter) {
        if(settings.hasOwnProperty('queue')) {
            if(submitter === "edit") {
                return {
                    user_id: userId,
                    title: target.name.value,
                    keyword: target.keyword.value.replace(/\s/g, ''),
                    description: target.description.value,
                    date: setServerTime(),
                } 
            } else {
                return {
                    user_id: userId,
                    title: target.name.value,
                    keyword: target.keyword.value.replace(/\s/g, ''),
                    description: target.description.value,
                    date: setServerTime(),
                    wrap: false,
                    units: [],
                    ticketNum: 0
                }
            }

        } else {
            return {
                id : settings.member.memberId,
                ticket: settings.member.memberTicket,
                queue_id: queues.find(item => item.wrap === true)._id, 
                phone: target.phone.value,
                date: setServerTime()
            }
        }
    }

    return (
        settings.hasOwnProperty('queue') ? (
            <Container onClick={() => setSettings(null)}>
                <Content onSubmit={ e => handleSubmit(e) } onClick={ e => e.stopPropagation() }>
                    <TitleModal> {settings.queue.title} </TitleModal>

                    <InputContainer>
                        <InputsTitleModal> { settings.queue.nameTitle } </InputsTitleModal>
                        <InputField name="name" 
                                    placeholder={settings.queue.nameValue} 
                                    style={!nameErrored ? {} : {background:"rgba(239, 85, 85, 0.14)", color:"rgba(239, 85, 85, 1)"}}
                                    onChange={() => setNameErrored(false)}
                                    autoComplete='off'
                                    defaultValue={settings.queue.nameValue}
                        />
                        <AttentionTextModal style={!nameErrored ? {visibility:"hidden"} : {visibility:""}}> Queue name is empty </AttentionTextModal>
                    </InputContainer>

                    <InputContainer>
                        <InputsTitleModal> { settings.queue.keywordTitle } </InputsTitleModal>
                        <Field style={!keywordErrored ? {} : {background:"rgba(239, 85, 85, 0.14)"}}>   
                            <img src={!keywordErrored ? key : redkey} style={{marginRight:"5px"}} alt="key" />
                            <InputField name="keyword"
                                        style=  {!keywordErrored ? { padding:0, width:"95%", background:"inherit" } : 
                                                { padding:0, width:"95%", background:"rgba(239, 85, 85, 0)", color:"rgba(239, 85, 85, 1)"}} 
                                        placeholder={settings.queue.keywordValue} 
                                        onChange={() => setKeywordErrored(false)}
                                        autoComplete='off'
                                        defaultValue={settings.queue.keywordValue}
                            />
                        </Field>
                        <AttentionTextModal style={!keywordErrored ? {visibility:"hidden"} : {visibility:""}}> This keyword is not unique. Change is the keyword. </AttentionTextModal>
                    </InputContainer>

                    <InputContainer>
                        <InputsTitleModal> { settings.queue.dateTitle } </InputsTitleModal>
                        <InputField name="date" type="datetime-local" onChange={(e) => setTime(e.target.value)} autoComplete='off'/>
                    </InputContainer>

                    <InputContainer>
                        <InputsTitleModal> { settings.queue.descriptionTitle } </InputsTitleModal>
                        <TextArea name="description" defaultValue={settings.queue.descriptionValue} autoComplete='off' />
                    </InputContainer>
                    
                    <RowContainer style={{justifyContent:"space-between", marginTop:"30px"}}>
                        <ActionText name="delete" type="submit"> {settings.default.actionText} </ActionText>
                        {settings.default.editText ? (<ActionText name="edit" type="submit"> {settings.default.editText} </ActionText>) : <></>}
                        <ActionText style={{color:"#393B44"}} onClick={() => setSettings(null)}> CLOSE </ActionText>
                    </RowContainer>

                </Content>
            </Container>
        ) : settings.hasOwnProperty('member') ? (
            <Container onClick={() => setSettings(null)}>
                <Content onSubmit={ e => handleSubmit(e) } onClick={ e => e.stopPropagation() }  style={{height:"300px"}}>
                    <TitleModal> {settings.member.title} </TitleModal>
                    <InputContainer>
                        <InputContainer>
                            <InputsTitleModal> { settings.member.phoneTitle } </InputsTitleModal>
                            <InputField name="phone" 
                                        defaultValue={ settings.member.phoneValue }
                                        style={!PhoneErrored ? {} : {background:"rgba(239, 85, 85, 0.14)", color:"rgba(239, 85, 85, 1)"}} 
                                        type="tel"  
                                        autoComplete='off' 
                                        maxLength="16" 
                                        placeholder='+_(___)___-__-__' 
                                        onChange={() => setPhoneErrored(false)}
                        />
                            {/* <AttentionTextModal> {settings.member.phonePattern} </AttentionTextModal> */}
                            <AttentionTextModal style={{margin:0}}> {settings.member.phoneAttention} </AttentionTextModal>
                        </InputContainer>

                        <InputContainer>
                            <InputsTitleModal> { settings.member.dateTitle } </InputsTitleModal>
                            <InputField name="date" defaultValue={ settings.member.dateValue } type="datetime-local"  onChange={(e) => setTime(e.target.value)} autoComplete='off'/>
                        </InputContainer>
                    </InputContainer>
                   
                    <RowContainer style={{justifyContent:"space-between", marginTop:"30px"}}>
                        {settings.member?.memberId ? (
                                <><ActionText name="delete" type="submit"> {settings.default.editText} </ActionText></>
                            ) : (
                                <><ActionText name="delete" type="submit"> {settings.default.actionText} </ActionText>
                                </>
                            )
                        }
                        <ActionText style={{color:"#393B44"}} onClick={() => setSettings(null)}> CLOSE </ActionText>
                    </RowContainer>

                </Content>
            </Container>
        ) : <></>
        
    );  
}