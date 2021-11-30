import styled from "styled-components";

const linkColor = '#FFA931'

export const HeaderContainer = styled.div`
    width: 90vw;
    top:0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const Image = styled.img`
    margin: 20px;
    left: 20px
`;

export const HeaderButton = styled.input`
    margin: 27px;
    background-color: rgba(255,169,49,0.1);
    border-radius: 50px;
    color: ${linkColor};
    text-align: center;
    border: 0;
`;