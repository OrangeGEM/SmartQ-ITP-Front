import styled from 'styled-components';
import { ColumnContainer, RowContainer, ProfileTotalQueue } from '../../../globalStyles'

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
`;

export const InnerContent = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    border: 1px solid;
`;

export const InformationContent = styled.div`
    width: 40%;
    display: flex;
`;

export const InputContent = styled.div`
    width: 60%;
    display: flex;
`;

export const ImageContainer = styled.div`
    width: 200px;
    height: 200px;
    padding: 1px;
    border-radius: 50%;
    border: 1px solid;
    overflow: hidden;
`;

export const EmailLightning = styled.a`
    font-family: DM Mono;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 155.8%;
    border: 0;
`

export const DropContainer = styled.div`
    width: 100%;
    border: 2px dashed;

    padding: 10px 20px;

    display: flex;
    justify-content: center;
    align-items: center;
`;