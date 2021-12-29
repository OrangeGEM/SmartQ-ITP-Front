import styled from 'styled-components';
import { ColumnContainer, RowContainer } from '../../../globalStyles.js'

export const Container = styled.div`
    margin-top: 20px;
    margin-bottom: 35px;
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const EmailContainer = styled(RowContainer)`
    align-items: center;
`;
