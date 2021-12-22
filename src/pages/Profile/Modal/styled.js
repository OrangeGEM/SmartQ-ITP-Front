import styled from 'styled-components';
import { ColumnContainer, RowContainer } from '../../../globalStyles.js'

export const Container = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(57, 59, 68, 0.8);
`;

export const Content = styled.form`
    width: 335px;
    height: 500px;
    background-color: #F1F3F8;
    
    padding: 30px 15px;
    display: flex;
    flex-direction: column;
    justify-content:space-between;
`;

export const InputContainer = styled(ColumnContainer)`
    margin-bottom: 10px;
`;      

export const InputField = styled.input`
    height: 48px;
    background: #D6E0F0;
    border: 0;
    outline:none;
    box-sizing: border-box;
    padding: 0px 10px;
`;

export const TextArea = styled.textarea`
    height: 83px;
    border: 0;
    resize: none;
    background: #D6E0F0;
    outline:none;
    box-sizing: border-box;
    padding: 15px 10px;
`;

export const Field = styled.div`
    background: #D6E0F0;
    padding: 0px 10px;
`