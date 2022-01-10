import React, { useState, useEffect, useContext } from 'react';
import { ColumnContainer, RowContainer, TitleModal } from '../../../globalStyles';

import { Container, InnerContent, ImageContainer, InformationContent, InputContent, EmailLightning, DropContainer } from './styled';

export default function Content({email}) {

    return (
        <Container>
            <InnerContent>
                <RowContainer>
                    
                    <InformationContent>
                        <ImageContainer> 
                            
                        </ImageContainer>
                    </InformationContent>

                    <InputContent>
                        <ColumnContainer>
                            <TitleModal> John Doe </TitleModal>
                            <EmailLightning href={`mailto:${email}`}> {email} </EmailLightning>
                            <DropContainer>
                                Drop your files here or click in this area
                            </DropContainer>
                        </ColumnContainer>
                    </InputContent>
                    
                </RowContainer>
            </InnerContent>
        </Container>
    );
}