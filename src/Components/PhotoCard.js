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
`;

const Body =styled.body`

display: Flex;
justify-content: center;
background: LightGray;
margin: 2% 0% 0% 12.5%;

`

const Image =styled.img`
display: flex;
justify-content: center;
width: 50%;
height: auto;

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
margin: 0 10% 0 10%;
`

const Card = styled.div `

display:flex;
flex-direction: column;
justify-content: center;
background: SlateGray;
margin: 2% 12.5% 0% 0%;

`
