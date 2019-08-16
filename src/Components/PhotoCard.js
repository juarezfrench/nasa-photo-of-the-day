import React from "react";
import Moment from 'react-moment';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.css";









function PhotoCard(props)  {
// console.log('PhotoCard.js -> %cdata:', 'color: DarkOrange', props)


// console.log('PhotoCard.js -> %cdata:', 'color: DeepPink', props)
  



return (


<Card>
		<Carousel>
    showThumbs={false}
 			<div>
       <Title>{props.title} </Title>
       <Image src= {props.url} alt = "Space, the Final Frontier"/>
       <Date> <Moment className = "date" format="LL">{props.date}</Moment> </Date>
       <Intro className="intro"> About " {props.title} "</Intro>
       
       <Content className="explanation">
  
          {props.explanation}

      </Content>
 				
		</div>
 		
 		</Carousel>
 	</Card>
)
 }


export default PhotoCard



const Title = styled.h2`
  font-size: 3em;
  text-align: center;
  color: DimGray;
  font-family: Baskerville;
  text-transform: uppercase;


`;


const Image =styled.img`
display: flexbox;
justify-content: flex-end;
width: 40%;
height: auto;
margin: 0 0 0% 26%;

`

const Date=styled.h3`
font-size: 1.5em;
text-align: center;
color: DimGray;
text-transform: uppercase;
font-family: Baskerville;
`

const Intro=styled.p`
text-align: center;
color: DimGray;
text-transform: uppercase;
font-weight: bold;
font-family: 'League Spartan Bold';
    font-weight:normal;
    font-style:normal;
`


const Content=styled.p `
text-align: center;
color: Gray;
text-align: left;
margin: 0 5% 0 5%;
padding-bottom: 5%;

`

const Card = styled.div `

display:flex;
flex-direction: column;
justify-content: center;
background: Black;
margin: 2% 10% 0% 10%;

`
