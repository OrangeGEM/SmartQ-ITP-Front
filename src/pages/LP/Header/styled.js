import styled from "styled-components";
import { Link } from "react-router-dom";


const linkColor = '#FFA931';
const stepColor = '#8D93AB';

// HEADER //
export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-align: center;
    padding-bottom: 50px
`

export const Image = styled.img`
    margin: 20px;
    left: 20px
`;

export const HeaderButton = styled.input`
    width:120px;
    margin: 27px;
    background-color: rgba(255,169,49,0.1);
    border-radius: 50px;
    color: ${linkColor};
    text-align: center;
    border: 0;
`;

//  MAIN  // 