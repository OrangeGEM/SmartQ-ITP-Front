import styled from "styled-components";
import { Link } from "react-router-dom";

export const ColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const RowContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export const TitleText = styled.div`
    font-family: Epilogue;
    font-style: normal;
    font-weight: bold;
    font-size: 62px;
    line-height: 64px;

    color: #393B44;
    white-space: nowrap;

    margin-bottom: 35px;
`;

export const LinkText = styled(Link)`
    color: #FFA931;
    text-decoration: none;
    text-align: left;
    align-self: flex-start;

    font-family: Epilogue;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;

    margin-right: 50px;

    font-family: DM Mono;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
`;

export const TextInfo = styled.div`
    font-family: DM Mono;
    font-style: normal;
    font-weight: normal;
    font-size: 26px;
    line-height: 155.8%;


    color: #393B44;
`;  

export const Button = styled.input`
    border-radius: 50px;
    min-height: 56px;
    max-width: 268px;
    background-color: #FFA931;
    color: white;
    border: 0;
`;

export const AttentionText = styled.span`
    color: grey;
`;  