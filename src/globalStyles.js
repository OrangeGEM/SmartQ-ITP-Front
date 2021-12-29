import styled from "styled-components";
import { Link } from "react-router-dom";

const linkColor = '#F59E6A';

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

export const ProfileTitleText = styled.div`
    font-family: Futura PT;
    font-style: normal;
    font-weight: 450;
    font-size: 22px;
    line-height: 102.6%;
`;

export const ProfileTopText = styled.div`
    font-family: Futura PT;
    font-style: normal;
    font-weight: 450;
    font-size: 24px;
    line-height: 31px;
`

export const ProfileTotalQueue = styled.div`
    font-family: DM Mono;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 155.8%;
`;

export const ProfileAddQueue = styled.div`
    font-family: Futura PT;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 23px;
    letter-spacing: 0.08em;
    
    margin-right: 15px;

    color: ${linkColor};
    cursor: pointer;
`

export const QueueTitleText = styled.div`
    font-family: Futura PT;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 102.6%;
`;

export const QueueKeyword = styled.div`
    font-family: DM Mono;
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 155.8%;
    letter-spacing: 0.11em;

    margin-bottom: 5px;
`;

export const DescriptionText = styled.div`
    font-family: DM Mono;
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 155.8%;

    margin-bottom: 11px;
`;

export const DescriptionMember = styled(ProfileTotalQueue)`
    font-weight: 500;
`

export const TitleModal = styled.div`
    font-family: Epilogue;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 102.6%;

    margin-bottom: 20px;
`;

export const InputsTitleModal = styled.div`
    font-family: Futura PT;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.08em;
    text-transform: uppercase;

    margin-bottom: 10px;

    color: #8D93AB;
`;

export const AttentionTextModal = styled.div`
    font-family: DM Mono;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 155.8%;
    color: #F54D4D;

    margin-top: 5px;
`;

export const ActionText = styled.button`
    font-family: Futura PT;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.08em;
    text-transform: uppercase;

    color: #F59E6A;

    cursor: pointer;
    border:0;
`;
