import React from 'react';
import styled from "styled-components";

const NavWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 150px;
    height: 86px;

`
const LeftSide = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const RightSide = styled.div`
    display: flex;
    align-items: center;
`
const Logo = styled.img`
   height: 145px;
   width: 280px;
`
const NavLinks = styled.a`
    text-decoration: none;
    font-family: Nunito;
    font-weight: 400;
    color: #000000;
    margin-right: 43px;
`

const BtnSignIn = styled.div`
    width: 80px;
    height: 40px;
    display: flex;
    justify-content: center;
    background-color: #7A4BEF;
    cursor: pointer;
    font-weight: 400;
    padding: 8px;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 16px;
`
const BtnSignUp = styled.div`
    width: 80px;
    height: 40px;
    display: flex;
    justify-content: center;
    border: 1px solid #7A4BEF;
    cursor: pointer;
    font-weight: 400;
    font-size: 16px;
    padding: 8px;
    align-items: center;
    justify-content: center;
    color: #060606;
    margin-right: 40px;
`
const Navbar = () => {
  return (

      <NavWrap>
         <LeftSide>
             <Logo src="./images/logo.svg" alt="logo"/>
             <NavLinks>Meet</NavLinks>
             <NavLinks>Connect</NavLinks>
             <NavLinks>Build</NavLinks>       
             <NavLinks>Get Funded</NavLinks>       
         </LeftSide>
         <RightSide>
            <BtnSignUp>Sign Up</BtnSignUp>
            <BtnSignIn>Sign In</BtnSignIn>
         </RightSide>
      </NavWrap>
  )
};

export default Navbar;
