import React from 'react'
import { Quote, ImgWrap } from './AboutOurTeamStyle'
import TeamImg from "../../../../assets/images/about-us-our-team.jpg";
import { AboutOurTeamArticle } from '../../../ArticleData'

const AboutOurTeam = (props) => {
  return (
    <>
      <div className="public-div-container" style={{ backgroundColor: props.bg }} >
        <Quote>{AboutOurTeamArticle.SubTitle}</Quote>
        <p>{AboutOurTeamArticle.Article}</p>
        <ImgWrap>
          <img src={TeamImg}/>
          <p>A photo of our team</p>
        </ImgWrap>
      </div>
    </>
  )
}

export default AboutOurTeam
