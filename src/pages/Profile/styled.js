import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
`;

export const ContentContainer = styled.div`
    width: 90%;
    height: 100%;
`;

// GLOBAL //

export const TitleText = styled.div`
    font-family: Futura PT;
    font-style: normal;
    font-weight: 450;
    font-size: 22px;
    line-height: 102.6%;

    margin-right: 25px;

`;

export const DescriptionText = styled.div`
    font-family: DM Mono;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 155.8%;
`;

export const ActionText = styled.div`
    font-family: Futura PT;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 23px;
    text-align: right;
    letter-spacing: 0.08em;
    color: #F59E6A;
`;

export const RowContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export const ColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Image = styled.img`

`;

export const Icon = styled.img`

`;

// HEADER //

export const HeaderContainer = styled.div`
    width: 100%;
    height: 50px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 30px;
    margin-bottom: 30px;
`;

// TOP //

export const TopContainer = styled(HeaderContainer)`
    margin-top: 0px;
    margin-bottom: 0px;
`;



