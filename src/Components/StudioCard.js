import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
display: inline-flex;
flex-direction : row;
height: 114px;
width: 203px;
border-radius: 5px;
transition: transform 0.3s ease-in-out;
overflow: hidden;
padding: 2px;
box-sizing: border-box;
margin-top: 10px;
&:hover{
  transform: scale(1.1);
  cursor: pointer;
}`;

const Video = styled.video`
width : 203px;
height: 114px;
object-fit: cover;
position: absolute;
border-radius: 4px;
opacity:0;
&:hover{
  opacity: 100%; 
  border-radius:4px;
}
`;

const Img = styled.img`
height: 114px;
width: 203px;
&:hover{
  opacity: 0;
}
`;

const StudioCard= (props) =>{
  
    return(
        <>
          <Wrapper>
            <Img src= {props.image}/>
            <Video src= {props.video}autoPlay loop playsInline muted  />

            
            
          </Wrapper>
        </>
    );
}
export default StudioCard;