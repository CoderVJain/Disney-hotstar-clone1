import React from "react";
import styled from "styled-components";
import logo from "../Images/logo.webp";
import { HiOutlineUserCircle } from "react-icons/hi";
import { Details } from "../Constants/Constants";
 


const Image = styled.img`
    width: 51px;
    height: 37px;

`;

const NavTitle = styled.h3`
display: none;
// !Important Keep NavTitle above NavWrapper
`;

const NavItem = styled.div`
color: white;
display: flex;
flex-direction: row;
align-items: center;
height: 60px;
padding: 16px 12px;
margin-left: -20px;
&:hover{
    transform: scale(1.2);
    filter: drop-shadow(0 0 20px hsla(0,0%,100%,.6));
    
}
`;

 const NavWrapper = styled.div`
    height: 100vh;
    background-color: transparent;
    width: 96px;
    position: fixed;
    z-index: 2;
    left:0;
    top:0;
    display: flex;
    flex-direction: column;
    align-items: start;
    &:hover ${NavTitle}{
        display: block;
        margin-left: 10px;
    }
    &:hover{

        width: 15vw;
        background: linear-gradient( 90.43deg, rgba(15, 16, 20, 0.95) 35.24%, rgba(15, 16, 20, 0) 90.46% );
    }
    &:hover ${NavItem}{
        margin-left: -20px;
    }
    

 `;
 const NavTop = styled.div`
    width: 96px;
    height: 138px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
 `;







const SubscribeBtn = styled.button`
     width: 83px;
     height: 24px;
     background-color:#FFCC751A; 
     font-size: 12px;
     color: #FFCC75;   
     border-radius: 10px;
     margin-top: 10px;

`;
 

const NavBottom = styled.div`
    width: 100%;
    display: flex;
     flex-direction: column; 
    justify-content: center;
    padding: 60px 0 ;
    
`;


const Icon = styled.div`
 margin-left: 50px;
`;


const SideNav = ()=>{
    return(
    <NavWrapper>
        <NavTop>
            <Image src={logo}/>
            <SubscribeBtn>Subscribe</SubscribeBtn>
        </NavTop>
        <NavBottom>
            {/* <NavItem>
                <Icon> <HiOutlineUserCircle/></Icon> <NavTitle> My Space</NavTitle>
            </NavItem> */}

            {
            Details.map((item)=>{
                        return(
                            <NavItem>
                            <Icon><item.icon/></Icon> 
                            <NavTitle>{item.title}</NavTitle>
                            </NavItem>
                            )
                        })
            }
        </NavBottom>
    </NavWrapper>
    );
}


export default SideNav;