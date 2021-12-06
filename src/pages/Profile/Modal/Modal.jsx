import React, { useState, useEffect } from 'react';
import { LinkText } from '../../Auth/styled';
import { useDate } from '../../../hooks/client.date';

import { ModalSubmitButtin, ModalInputContainer, ModalInputBlock, DescriptionInputText, ModalContainer, ModalContent, ModalInputField, TitleText, ModalTextArea, RowContainer, ActionText, ColumnContainer } from '../styled'


export default function Modal({active, setActive, queues, setQueues}) {
    const { month, day, year } = useDate();

    function handleQueue(e) {
        e.preventDefault();
        const target = e.target;

        if( !target.title.value || !target.key.value || !target.desc.value ) {
            console.log('Unvalid data')
            setActive(false);
            return null;
        } // Добавить ErrorMessage для оповещение пользователя

        const form = {
            title: target.title.value,
            key: target.key.value,
            desc: target.desc.value,
            time: `${month}. ${day} ${year}`,
            wrap: false,
            units: []
        }
        setActive(false);
        setQueues( [
            ...queues,
            form
        ]);
        
        
    }

    return (
        active ? (
            <ModalContainer onClick={ () => setActive(false) }>
                <ModalContent onClick={ (e) => e.stopPropagation() } onSubmit={handleQueue} >
                    <TitleText style={{"marginBottom":"10px"}}> Add new queue </TitleText>

                    <ModalInputContainer>
                        <ModalInputBlock>
                            <DescriptionInputText> queue name </DescriptionInputText>
                            <ModalInputField type="text" name="title" placeholder="Queue name"/>
                        </ModalInputBlock>
                    
                        <ModalInputBlock>
                            <DescriptionInputText> keyword </DescriptionInputText>
                            <ModalInputField type="text" name="key" placeholder="Keyword"/>
                        </ModalInputBlock>

                        <ModalInputBlock>
                            <DescriptionInputText> description </DescriptionInputText>
                            <ModalTextArea name="desc" placeholder="The description of the queue" rows="3" cols="20"/>
                        </ModalInputBlock>
                    </ModalInputContainer>

                    <RowContainer style={{"justifyContent":"space-between"}}>
                        <ModalSubmitButtin type="submit" value="CREATE"/>
                        <ActionText style={{"color":"#393B44"}} onClick={ () => setActive(false) }> CLOSE </ActionText>
                    </RowContainer>
                </ModalContent>
            </ModalContainer>
        ) : <></>
    );
}