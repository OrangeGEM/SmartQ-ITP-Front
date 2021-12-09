import React, { useState, useEffect } from 'react';
import { LinkText } from '../../Auth/styled';
import { useDate } from '../../../hooks/date.hook';

import { Calendar, ModalSubmitButton, ModalInputContainer, ModalInputBlock, DescriptionInputText, ModalContainer, ModalContent, ModalInputField, TitleText, ModalTextArea, RowContainer, ActionText, ColumnContainer } from '../styled'
import { useHttp } from '../../../hooks/http.hook'

import moment from 'moment';
import DateTimePicker from 'react-datetime-picker';

export default function Modal({active, setActive, queues, setQueues, options, setOptions, activeMember, setActiveMember}) {
    const { month, day, year } = useDate();
    const [time, setTime] = useState(new Date());
    const { request } = useHttp();

    async function handleQueue(e) {
        e.preventDefault();
        const target = e.target;
        const submitter = e.nativeEvent.submitter;
        const form = formCollector(target)
        //console.log('Form to fetch', form)
        if(Object.keys(options).length === 0) {
            if( !form.title || !form.key || !form.desc ) {
                console.log('Unvalid data')
                setActive(false);
                return null;
            }
            //console.log('fetch without options')
            const data = await request(`${process.env.REACT_APP_API_URL}/api/profile/setqueue`, 'POST', form);
            console.log('response', data)
            setQueues(data.setQueue);
            setActive(false);

        } else {
            if(submitter.name == 'edit') {
                const data = await request(`${process.env.REACT_APP_API_URL}/api/profile/updatequeue`, 'POST', form);

                setQueues(data.setQueue);
                setOptions({})
                setActive(false);
            } else {
                //console.log('fetch with options')
                const data = await request(`${process.env.REACT_APP_API_URL}/api/profile/deletequeue`, 'POST', form);

                setQueues(data.setQueue);
                setOptions({})
                setActive(false);
            } 
        }
        // Добавить ErrorMessage для оповещение пользователя   
    }

    function handleMember(e) {
        e.preventDefault();
        console.log(e)
    }


    function formCollector(target) {
        if(Object.keys(options).length === 0) {
            return {
                title: target.title.value,
                key: target.key.value,
                desc: target.desc.value,
                time: `${month}. ${day} ${year}`,
                wrap: false,
                units: []
            }
        } else {
            return {
                _id: options._id,
                title: target.title.value,
                key: target.key.value,
                desc: target.desc.value
            }
        }
    }
    console.log('active:', active);
    console.log('memberactive:', activeMember)
    console.log(time)
    return (
        active ? (
            <ModalContainer onClick={ () => { setActive(false); setOptions({}) }}>
                <ModalContent onClick={ (e) => e.stopPropagation() } onSubmit={handleQueue} >
                    <TitleText style={{"marginBottom":"10px"}}> { options.modalTitle ? options.modalTitle : "Add new queue" } </TitleText>

                    <ModalInputContainer>
                        <ModalInputBlock>
                            <DescriptionInputText> queue name </DescriptionInputText>
                            <ModalInputField type="text" name="title" placeholder="Queue name" defaultValue={ options.title } />
                        </ModalInputBlock>
                    
                        <ModalInputBlock>
                            <DescriptionInputText> keyword </DescriptionInputText>
                            <ModalInputField type="text" name="key" placeholder="Keyword" defaultValue={ options.key }/>
                        </ModalInputBlock>

                        <ModalInputBlock>
                            <DescriptionInputText> description </DescriptionInputText>
                            <ModalTextArea name="desc" placeholder="The description of the queue" rows="3" cols="20" defaultValue={ options.desc }/>
                        </ModalInputBlock>
                    </ModalInputContainer>

                    <RowContainer style={{"justifyContent":"space-between"}}>
                        { options.submitButtonValue ? (<ModalSubmitButton type="submit" name="delete" value={options.submitButtonValue}/>) : <ModalSubmitButton type="submit" value="CREATE"/> }
                        { options.middleButtonValue ? (<ModalSubmitButton type="submit" name="edit" value={options.middleButtonValue}/>) : <></> }
                        <ActionText style={{"color":"#393B44"}} onClick={ () => { setActive(false); setOptions({}) }}> CLOSE </ActionText>
                    </RowContainer>
                </ModalContent>
            </ModalContainer>
        ) : activeMember ? (
            <ModalContainer onClick={ () => { setActiveMember(false) }}>
                <ModalContent onClick={ (e) => e.stopPropagation() } onSubmit={handleMember} >
                    <TitleText style={{"marginBottom":"10px"}}> Add new member </TitleText>

                    <ModalInputContainer>
                        <ModalInputBlock>
                            <DescriptionInputText> Member number </DescriptionInputText>
                            <ModalInputField type="text" name="number" placeholder="Member number" maxLength="12"/>
                        </ModalInputBlock>

                        <ModalInputBlock>
                            <DescriptionInputText> Member number </DescriptionInputText>
                            <Calendar
                                locale="en-US"
                                format="dd-MM h:mm"
                                onChange={setTime}
                                value={time}
                            />
                        </ModalInputBlock>


                    </ModalInputContainer>

                    <RowContainer style={{"justifyContent":"space-between"}}>
                        <ModalSubmitButton type="submit" value="CREATE" />
                        <ActionText style={{"color":"#393B44"}} onClick={ () => { setActiveMember(false) }}> CLOSE </ActionText>
                    </RowContainer>
                </ModalContent>
            </ModalContainer>
        ) : <></> 
    );
}