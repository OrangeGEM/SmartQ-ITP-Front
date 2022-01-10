import styled from 'styled-components';
import { ColumnContainer, RowContainer } from '../../../globalStyles'

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;

    margin-top: 10px;
    margin-bottom: 10px;
`

export const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border: 1px solid;
`;
