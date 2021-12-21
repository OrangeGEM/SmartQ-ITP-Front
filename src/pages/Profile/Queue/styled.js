import styled from 'styled-components';
import { ColumnContainer, RowContainer } from '../../../globalStyles.js'

export const Container = styled(RowContainer)`
    width: 100%;
    border: 1px solid black;
`;

export const QueuesContainer = styled(ColumnContainer)`
    width: 30%;
    border: 1px solid black;
`;

export const MembersContainer = styled(ColumnContainer)`
    width: 70%;
    border: 1px solid black;
`;

