import React from "react";
import styled from "styled-components";

const MainDiv = styled.div`
display: inline-flex;
flex-direction : row;
width: 254px;
height: 144px;
border-radius: 8px;
z-index: 2;
cursor: pointer;
transition: transform 0.15s ease-in 0,3s, z- index 0.15s ease-in 0.3s;
&:hover {
    transform: scale(1.15)
    z-index: 3;
    transition: transform 0.15s ease-in 0,3s, z- index 0.15s ease-in 0.3s;
}
`;

const ImageContainer = styled.img`
  height:100%;
  width:100%;
  border-radius: inherit;
`;
const SmallSlider =(props)=>{
    return(
        <>
        <MainDiv>
            <ImageContainer src={props.image}/>
        </MainDiv>
        </>
    );
}
export default SmallSlider;