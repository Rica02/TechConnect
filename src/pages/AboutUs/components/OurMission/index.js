import React from 'react'
import { OurMissionArticle } from '../../../ArticleData';

const OurMission = (props) => {
  return (
    <>
      <div className="public-div-container" style={{ backgroundColor: props.bg }} >
        <h2>Our mission</h2>
        <p >{OurMissionArticle.Article}</p>
      </div>
    </>
  );
}

export default OurMission
