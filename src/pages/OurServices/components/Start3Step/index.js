import React from "react";
import { useNavigate } from "react-router-dom";
import {
    Container,
    ContainerStep,
    ContainerWrap,
    ContentText,
    Number,
    PhoneNumber,
    StepNumberWrap1,
    StepNumberWrap2,
    StepNumberWrap3,
    StepTitle,
    StepWrap,
    TextH1,
    TextWrap,
    TextRow
} from "./Start3StepStyle";
import { ClickHear } from "./ButtonStyle";

function Start3Step({ Step1_1, Step1_2, Step1_3, Step2, Step3 }) {
    let navigate = useNavigate();
    return (
        <>
            <Container>
                <ContainerWrap>
                    <TextH1>Start learning in just 3 steps!</TextH1>
                    <ContainerStep>
                        <StepWrap>
                            <StepTitle>Step</StepTitle>
                            <StepNumberWrap1>
                                <Number>1</Number>
                            </StepNumberWrap1>
                        </StepWrap>
                        <TextRow>
                        <TextWrap>
                            <ContentText>{Step1_1} </ContentText>
                            <ClickHear onClick={ () => navigate("/bookanappointment") }>
                                CLICK HERE
                            </ClickHear>
                        </TextWrap>
                        <TextWrap>
                            <ContentText>
                                {Step1_2}
                            </ContentText>
                            <PhoneNumber to="/signin">000-000-0000</PhoneNumber>
                        </TextWrap>
                        <TextWrap>
                            <ContentText>
                                {Step1_3}
                            </ContentText>
                        </TextWrap>

                        </TextRow>

                    </ContainerStep>
                    <ContainerStep>
                        <StepWrap>
                            <StepTitle>Step</StepTitle>
                            <StepNumberWrap2>
                                <Number>2</Number>
                            </StepNumberWrap2>
                        </StepWrap>
                        <TextWrap>
                            <ContentText>{Step2}</ContentText>
                        </TextWrap>
                    </ContainerStep>
                    <ContainerStep>
                        <StepWrap>
                            <StepTitle>Step</StepTitle>
                            <StepNumberWrap3>
                                <Number>3</Number>
                            </StepNumberWrap3>
                        </StepWrap>
                        <TextWrap>
                            <ContentText>{Step3}</ContentText>
                        </TextWrap>
                    </ContainerStep>
                </ContainerWrap>
            </Container>
        </>
    );
}

export default Start3Step;
