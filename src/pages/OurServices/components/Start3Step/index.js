import React from "react";
import { useNavigate } from "react-router-dom";
import {
    StepNumberWrap,
    StepTitle,
    CellWrap
} from "./Start3StepStyle";
import { Start3StepArticle } from '../../../ArticleData'


function Start3Step(props) {
    let navigate = useNavigate();
    return (
        <>
            <div className="public-div-container" style={{ backgroundColor: props.bg }} >
                <h2>Start learning in just 3 steps!</h2>
                    <table>
                        <tr>
                            <td>
                                <CellWrap>
                                    <StepTitle>Step</StepTitle>
                                    <StepNumberWrap bg={ ({ theme }) => theme.colorMain.highlightYellow} >
                                        <h4>1</h4>
                                    </StepNumberWrap>
                                </CellWrap>
                            </td>
                            <td>
                                <CellWrap>
                                    <p>
                                        {Start3StepArticle.Step1_1}
                                        <button className="styled-button" onClick={ () => navigate("/bookanappointment") }>CLICK HERE</button>
                                        {Start3StepArticle.Step1_2}
                                        <a href="tel:#">000-000-0000</a>.
                                        {Start3StepArticle.Step1_3}
                                    </p>
                                </CellWrap>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <CellWrap>
                                    <StepTitle>Step</StepTitle>
                                    <StepNumberWrap bg={ ({ theme }) => theme.colorMain.highlightOrange} >
                                        <h4>2</h4>
                                    </StepNumberWrap>
                                </CellWrap>
                            </td>
                            <td>
                                <CellWrap>
                                    <p>{Start3StepArticle.Step2}</p>
                                </CellWrap>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <CellWrap>
                                    <StepTitle>Step</StepTitle>
                                    <StepNumberWrap bg={ ({ theme }) => theme.colorMain.highlightRed} >
                                        <h4>3</h4>
                                    </StepNumberWrap>
                                </CellWrap>
                            </td>
                            <td>
                                <CellWrap>
                                    <p>{Start3StepArticle.Step3}</p>
                                </CellWrap>
                            </td>
                        </tr>
                    </table>
            </div>
        </>
    );
}

export default Start3Step;
