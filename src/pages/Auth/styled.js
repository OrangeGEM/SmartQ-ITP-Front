import styled from "styled-components";
import { Link } from "react-router-dom";

const backgroundColor = '#D6E0F0';
const inputColor = '#E6EBF5';
const linkColor = '#FFA931'
const textButtonColor = '#E6EBF5';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const AuthContainer = styled.div`
    width: 360px;
    height: 640px; 

    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;

    padding: 20px;


    background-color: ${backgroundColor};
`;

export const Image = styled.img`

`;

export const FormContainer = styled.form`
    width: 100%;
    height: 40%;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    margin: 20px;
`;

export const InputField = styled.input`
    width: 100%;
    height: 56px;
    
    background-color: ${inputColor};

    border: 0;

    margin-bottom: 16px;
    box-sizing: border-box;
    padding-left: 15px;
`;

export const ButtonField = styled(InputField)`
    background-color: ${linkColor};
    color: ${textButtonColor};
`;

export const LinkText = styled(Link)`
    color: ${linkColor};
    text-decoration: none;
    text-align: left;
    align-self: flex-start;
`;

export const FooterContainer = styled.div`
    width:100%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const FooterForm = styled(FooterContainer)`
    justify-content: flex-start;
`;