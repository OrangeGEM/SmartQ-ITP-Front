import styled from 'styled-components';
import { ColumnContainer, RowContainer } from '../../globalStyles.js'

export const Container = styled(ColumnContainer)`
    width: 100vw;
    height: 100vh;

    background-color: #191919;
    color: #f0f0f0;

    justify-content: center;
    align-items: center;
`;

export const TitleText = styled.div`
    font-size: 128px;
`;

export const Subtitle = styled.div`
    font-size: 64px;
`;  

export const GoHome = styled.input`
    margin-top: 20px;
    width: 150px;
    height: 50px;
    border-radius: 100px;
    outline: none;
    border: 0;

    cursor: pointer;

    &:hover {
        color: #f0f0f0;
        background-color: #FFA931;
    }
`;

