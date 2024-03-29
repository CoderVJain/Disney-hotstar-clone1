import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
position:relative;
display:block;
width:180px;
height:240px;
background-color: #16181f;
border-radius:10px;
cursor:pointer;
`;

const Cover = styled.img`
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


const Hoverwrapper= styled.div`
position:absolute;
top: -32%;
Left: -44%;
display:flex;
flex-direction: column;
background-color: #16181f;
width: 336px;
height: 394px;
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
&:hover ${Cover}{
    width:336px;
    height:189px;
}
`;

const ImgTop= styled.img`
border-radius:inherit;
width:336px;
height:189px;
object-fit:cover;
object-position:center;
`;

const MovieLogo= styled.img`
width:fit-content;
height: 64px;
position:absolute;
top:100px;
Left:0;
margin:12px;
`;

const BottomContainer = styled.div`
margin: 20px 12px 12px 12px;
background-color: #16181f;
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

const MovieInfo = styled.p`
color:white;
font-size:14px;
font-weight:600;
`;

const Description = styled.p`
font-size: 14px;
Line-height:20px;
color:#8f98b2;
margin-top:4px;
`;



const MovieCard =(props)=>{
    console.log(props)
    return(
    <>
    <CardContainer>
        <Cover src={props.cover}></Cover>
     <Hoverwrapper>
        <ImgTop src={props.top}></ImgTop>
        <MovieLogo src={props.logo}></MovieLogo>
        <BottomContainer>
                <ButtonDiv>
                    <WatchNow>
                         <box-icon name='play'  color='black' type='solid'></box-icon>
                          Watchnow
                    </WatchNow>
                    <PlusButton>
                        <box-icon name='play'  color='white' ></box-icon>
                    </PlusButton>
                </ButtonDiv>
                <MovieInfo>
                {props.year} . { props.seasons} . {props.availableIn}    
                </MovieInfo>
                <Description>
                    {props.desc}
                </Description>
        </BottomContainer>
        </Hoverwrapper>
        </CardContainer>
    </>
    );
}
export default MovieCard;