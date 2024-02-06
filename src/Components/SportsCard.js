import React from "react";
import styled from "styled-components";

// title: "Eng Hammer Ban, Bounce Back",
// image: EngVsBan,
// description: "England were totally dominant as they beat Bangladesh by 137 runs to get their first points in ICC Men's Cricket World Cup 2023",
// duration: "15m"

// title: "Loki",
//     image: Loki,
//     logo: LokiLogo,
//     Hover: LokiHover,
//     year: "2023",
//     seasons: "2 seasons",
//     availableIn: "4 Languages",
//     ratings: "U/A 13+",
//     genre: "Superhero | Science Fiction | Action | Fantasy",
//     description:

const SportsContainer = styled.div`
position:relative;
display:block;
width:180px;
height:240px;
background-color: #16181f;
border-radius:10px;
cursor:pointer;
`;

const Upper = styled.img`
height:100%;
width:100%;
border-radius:10px;
opacity:1;
object-fit:cover;
transition:transform 0.5s ease-in-out;
&:hover{
    opacity:0;
}
`;

const Shoverwrapper= styled.div`
position:absolute;
top: -32%;
Left: -44%;
display:flex;
flex-direction: column;
background-color: #16181f;
width: 310px;
height: 360px;
border-radius: 15px;
opacity:0;
transform-origin: center center;
transition-delay: 0.4s;
transition: all 0.2s ease-in-out;
transform: scale(0.53374, 0.606);
overflow:hidden;
&:hover{
    opacity:1;
    z-index:3;
    transform: scale(1);
    transition: all 0.2s ease-in-out;
    transition-delay: 0.4s;
}
&:hover ${Upper}{
    width:336px;
    height:189px;
}
`;

const ButtonDiv = styled.div`
display:flex;
align-items:center;
justify-content: space-between;
`;

const WatchNow = styled.button`
   display:flex;
   justify-content:center;
   align-items:center;
   width:256px;
   height:48px;
   padding:14px;
   color:black;
   border:none;
   font-size:14px;
   font-weight: 600;
   background-color:white;
   border-radius:10px;
   cursor:pointer;
`;

const PlusButton = styled.button`
height:48px;
width:48px;
padding: 14px;
color:black;
background-color: rgba(197, 197, 197, 0.5);
border-radius:10px;
border:none;
cursor:pointer;
& box-icon{
    width:20px;
    height:20px;
}
`;

const ImgUpper= styled.img`
border-radius:inherit;
width:336px;
height:189px;
object-fit:cover;
object-position:center;
`;


const Description = styled.p`
font-size: 14px;
Line-height:20px;
color:#8f98b2;
margin-top:4px;
`;
const Duration = styled.p`
font-size: 14px;
Line-height:20px;
color:#8f98b2;
margin-top:-10px;
`;



const Title = styled.p`
font-size: 14px;
Line-height:20px;
color:#8f98b2;
margin-top:4px;
`;


const SoprtsCard =(props) =>{
    return(
        <>
        
        <SportsContainer>
            <Upper src={props.cover}/>
            <Shoverwrapper>
                <ImgUpper src={props.top} />
                <Title> {props.name}</Title>
                <ButtonDiv>
                    <WatchNow>
                         <box-icon name='play'  color='black' type='solid'></box-icon>
                          Watchnow
                    </WatchNow>
                    <PlusButton>
                        <box-icon name='play'  color='white' ></box-icon>
                    </PlusButton>
                </ButtonDiv>
            <Description>
                    {props.desc}
            </Description>
            <Duration>
                {props.duration}
            </Duration>
               </Shoverwrapper>
        </SportsContainer>

        </>
    );
}
export default SoprtsCard;