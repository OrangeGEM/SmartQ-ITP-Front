import React, { useState, useEffect } from 'react';
import { LinkText } from '../../Auth/styled';

import { ModalInputContainer, ModalInputBlock, DescriptionInputText, ModalContainer, ModalContent, ModalInputField, TitleText, ModalTextArea, RowContainer, ActionText, ColumnContainer } from '../styled'


export default function Modal({active, setActive}) {


    return (
        active ? (
            <ModalContainer onClick={ () => setActive(false) }>
                <ModalContent onClick={ (e) => e.stopPropagation() }>
                    <TitleText style={{"marginBottom":"10px"}}> Add new queue </TitleText>

                    <ModalInputContainer>
                        <ModalInputBlock>
                            <DescriptionInputText> queue name </DescriptionInputText>
                            <ModalInputField type="text" name="name" placeholder="Queue name"/>
                        </ModalInputBlock>
                    
                        <ModalInputBlock>
                            <DescriptionInputText> keyword </DescriptionInputText>
                            <ModalInputField type="text" name="keyword" placeholder="Keyword"/>
                        </ModalInputBlock>

                        <ModalInputBlock>
                            <DescriptionInputText> description </DescriptionInputText>
                            <ModalTextArea name="description" placeholder="The description of the queue" rows="3" cols="20"/>
                        </ModalInputBlock>
                    </ModalInputContainer>

                    <RowContainer style={{"justifyContent":"space-between"}}>
                        <ActionText type="submit"> CREATE </ActionText>
                        <ActionText style={{"color":"#393B44"}} onClick={ () => setActive(false) }> CLOSE </ActionText>
                        </RowContainer>
                </ModalContent>
            </ModalContainer>
        ) : <></>
    );
}