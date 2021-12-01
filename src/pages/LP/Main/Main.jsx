import React from "react";

import img from "../../../images/img-topcont.png";
import step1 from "../../../images/step-1.png"
import step2 from "../../../images/step-2.png"
import step3 from "../../../images/step-3.png"
import step4 from "../../../images/step-4.png"
import {
    ContentContainer,
    RightNowTextContainer,
    RightNowContainer,
    TopContentContainer,
    TopTextConteiner,
    MainButton,
    MainImage,
    TextInfo,
    TextTitle,
    AttentionText,
    TextContainer,
    StepsContainer,
    StepTextContainer,
    NumberSteps,
    Step,
    StartNowContainer,
} from "../styled";

function testingClick() {
    console.log("click");
}

export default function Main() {
    return (
        <ContentContainer>
            <TopContentContainer>
                <TopTextConteiner>
                    <TextTitle style={{ position: 'absolute' }}>Fast, simple & convenient</TextTitle>
                    <TextContainer>
                        <TextInfo> Сreate and manage a queue of your </TextInfo>
                        <TextInfo> clients. Customers do not need to </TextInfo>
                        <TextInfo> download the app and register — they can </TextInfo>
                        <TextInfo> queue and receive notifications via SMS </TextInfo>
                    </TextContainer>
                    <br />
                    <MainButton
                        type="button"
                        value="GET STARTED"
                        onClick={testingClick}
                    />
                </TopTextConteiner>

                <MainImage src={img} />
            </TopContentContainer>

            <RightNowContainer>
                <TextTitle> Right now </TextTitle>
                <RightNowTextContainer>
                    <TextInfo> Send an SMS with the keyword <AttentionText>BREWER</AttentionText> </TextInfo>
                    <TextInfo> to the service number <AttentionText>+16138006817</AttentionText> </TextInfo>
                    <TextInfo> download the app and register — they can </TextInfo>
                </RightNowTextContainer>
            </RightNowContainer>

            <StepsContainer>
                <Step>
                    <MainImage src={step1} />
                    <StepTextContainer>
                        <TextTitle style={{ 'font-size': '54px' }}> How it works </TextTitle>
                        <br />
                        <NumberSteps> STEP 1 </NumberSteps>
                        <TextInfo> Register in the service.  </TextInfo>
                        <TextInfo> Simple, fast and clear. </TextInfo>
                    </StepTextContainer>
                </Step>
                
                <Step>
                    <StepTextContainer>
                        <NumberSteps> STEP 2 </NumberSteps>
                        <TextInfo> You create a new queue for your clients </TextInfo>
                        <TextInfo> and tell them the <AttentionText> unique keyword. </ AttentionText>  </TextInfo>
                    </StepTextContainer>
                    <MainImage src={step2} />
                </Step>

                <Step>
                    <MainImage src={step3} />
                    <StepTextContainer>
                        <NumberSteps> STEP 3 </NumberSteps>
                        <TextInfo> The client sends the <AttentionText> unique keyword. </ AttentionText> </TextInfo>
                        <TextInfo> to the service number and receives </TextInfo>
                        <TextInfo> the sequence number in this queue.  </TextInfo>
                    </StepTextContainer>
                </Step>

                <Step>
                    <StepTextContainer>
                        <NumberSteps> STEP 4 </NumberSteps>
                        <TextInfo> The client receives an <AttentionText> SMS notification </ AttentionText> </TextInfo>
                        <TextInfo> that their turn has come. </TextInfo>
                    </StepTextContainer>
                    <MainImage src={step4} />
                </Step>
            </StepsContainer>

            <StartNowContainer>
                <TextTitle> Start Now </TextTitle>
                <TextInfo style={{'margin-bottom':'15px'}}> And you get the opportunity to </TextInfo>
                <TextInfo style={{'margin-bottom':'35px'}}> control the entire process. </TextInfo>

                <MainButton 
                        type="button"
                        value="GET STARTED"
                        onClick={testingClick}
                />
            </StartNowContainer>
            
        </ContentContainer>
    );
}
