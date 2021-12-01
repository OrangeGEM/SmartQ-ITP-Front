import styled from "styled-components";

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

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 79%;
    align-self: center;
    justify-content: center;
`;
export const TopContentContainer = styled(ContentContainer)`
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-bottom: 100px
`;

export const TopTextConteiner = styled.div`
    padding: 50px;
`;

export const TextTitle = styled.div`
    font-family: Epilogue;
    font-style: normal;
    font-weight: bold;
    font-size: 62px;
    line-height: 64px;
    margin-bottom: 20px;
`;

export const TextInfo = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 26px;

    margin-bottom: 10px;
`;  

export const TextContainer = styled.div`
    margin-top: 100px
`;

export const MainButton = styled.input`
    border-radius: 50px;
    height: 56px;
    width: 268px;
    background-color: ${linkColor};
    color: white;
    border: 0;
`;

export const MainImage = styled.img`
    text-align: right;
    width: 45%;

`;

// Main - center - rightnow //

export const RightNowContainer = styled.div`
    height: 250px;
    width: 100%;

    background-color: rgba(255,169,49,0.1);
    color: ${linkColor};

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    border: 2px dashed #FFA931;
    box-sizing: border-box;
    border-radius: 6px;
`;

export const RightNowTextContainer = styled(ContentContainer)`
    width: 50%;
    display: flex;
    flex-direction: column;
`;

export const AttentionText = styled.span`
    color: grey;
`;      

// Main - Center - Steps // 

export const StepsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const Step = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

    margin-bottom: 60px;
`;

export const NumberSteps = styled.div`
    color: ${stepColor};
    margin-bottom: 10px;
`;

export const StepTextContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;

`;

// Main - bottom - Start Now //

export const StartNowContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;

`;