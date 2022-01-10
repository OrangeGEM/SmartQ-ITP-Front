import styled from 'styled-components';
import { ColumnContainer, RowContainer } from '../../globalStyles'

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;

    background-color: #F1F3F8;
`;

export const InnerContent = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    border: 1px solid;
`;
