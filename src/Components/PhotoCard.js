import React from "react";
import Moment from 'react-moment';
import styled from 'styled-components';





function PhotoCard(props)  {


return (

    <Card>


        <Title>{props.title} </Title>

   

   
      
        <Image src= {props.url} alt = "Space, the Final Frontier"/>

        <Date> <Moment className = "date" format="LL">{props.date}</Moment> </Date>

       <Intro className="intro"> About " {props.title} "</Intro>

        <Content className="explanation">
        
        {props.explanation}
        
        </Content>

    






    </Card>

)

}

export default PhotoCard



const Title = styled.h2`
  font-size: 3em;
  text-align: center;
  color: MidnightBlue;
  font-stack: Baskerville;

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
color: MidnightBlue;

`

const Intro=styled.p`
text-align: center;
color: MidnightBlue;

`

const Content=styled.p `
text-align: center;
color: MidnightBlue;
text-align: left;
margin: 0 5% 0 5%;
padding-bottom: 5%;
`

const Card = styled.div `

display:flex;
flex-direction: column;
justify-content: center;
background: SlateGray;
margin: 2% 10% 0% 10%;

`
