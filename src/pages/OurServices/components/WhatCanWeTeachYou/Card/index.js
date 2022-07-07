import React from 'react'
import {CardWrap,CardImg,CardFont,CardFontWrap} from './CardStyle'
function Card({img,cardTitle}) {
  return (
    <CardWrap>
        <CardImg src={img}/>
        <CardFontWrap>
          <CardFont>{cardTitle}</CardFont>
        </CardFontWrap>
        
    </CardWrap>
  )
}

export default Card
