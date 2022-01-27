import React from 'react';
import styled from "styled-components";
import Fade from 'react-reveal/Fade';
import { Bounce, Rotate, Slide } from 'react-reveal';


const Container = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 150px;
    margin-top: 97px;
`
const SVGDes = styled.div`
    position: absolute;
    top: 45px;
    left: 337px;
`
const SVGDes2 = styled.div`
    position: absolute;
    top: 304px;
    left: 337px;
`
const PlusIcon = styled.div`
    position: absolute;
    top: 304px;
    left: 467px;
`
const LineIcon = styled.div`
    position: absolute;
    left: 587px;
    top: 526px;
    width: 161px;
    height: 115px;
`

const ElipseIcon = styled.div`
    position: absolute;
   
`
const LeftSide = styled.div`
  /* padding: 20px; */
  position: relative;


`
const Desc = styled.p`
width: 480px;
height: 120px;
font-weight: 600;
font-size: 34px;
margin-top: 15px;
`
const TextWrap = styled.div`
    width: 509px;
    height: 106px;

`
const BannetImage = styled.img`
    height: 100%;
`

const BannetLine = styled.img`
    width: 100%;
`
const LineWrap = styled.div`
    width: 285px;
    margin-top: 12px;

`
const Button = styled.div`
    width: 105px;
    height: 40px;
    background-color: #7A4BEF;
    cursor: pointer;
    font-weight: 400;
    padding: 8px;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 16px;
`

const RightSide = styled.div`
    position: relative;
    margin-right: 67px;
` 
const RigtFrame = styled.div`
    width: 350px;
    height: 473px;
    border: 14px solid #7A4BEF;
    margin-top: 100px;
`
const RigtImage = styled.img`
    position: absolute;
    top: -223px;
    width: 583px;
    height: 873px;
    left: -230px;
  
`
const Banner = () => {
  return (
  <Container>
    <Fade Left>
         <LeftSide>
        <SVGDes>
            <svg width="65" height="21" viewBox="0 0 65 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L16.4495 17.0777L26.0532 5.38483L37.5359 17.0777L50.0625 5.38483L64.0506 19.5833" stroke="#7A4BEF" stroke-width="2.65476"/>
            </svg>
        </SVGDes>
        <Rotate Top>
         <TextWrap>
            <BannetImage src="./images/next.svg" />
          </TextWrap>
        <LineWrap>
            <BannetLine src="./images/banner-line.svg" />
        </LineWrap>
        </Rotate>
        <Slide Right>
        <Desc>are you an entrepreneur looking for an amazing idea to be part of ?</Desc>
        </Slide>
        <Bounce Left>
        <Button>Get Started</Button>
        </Bounce>
            
        <SVGDes2>
            <svg width="70" height="80" viewBox="0 0 70 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.3106 51.8644L22.2118 13.3652L55.1025 33.3953L21.3106 51.8644Z" stroke="#7A4BEF" stroke-width="1.99107" stroke-linejoin="round"/>
            <path d="M24.334 66.9356L25.289 26.1379L60.1433 47.3639L24.334 66.9356Z" stroke="#7A4BEF" stroke-width="0.66369" stroke-linejoin="round"/>
            </svg>
            </SVGDes2>
            <PlusIcon>
                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.5923 5.53073C17.3559 5.53073 17.975 6.14978 17.975 6.91342V15.2096H26.2711C27.0347 15.2096 27.6538 15.8286 27.6538 16.5922C27.6538 17.3559 27.0347 17.9749 26.2711 17.9749H17.975V26.2711C17.975 27.0347 17.3559 27.6537 16.5923 27.6537C15.8286 27.6537 15.2096 27.0347 15.2096 26.2711V17.9749H6.91345C6.14981 17.9749 5.53076 17.3559 5.53076 16.5922C5.53076 15.8286 6.14981 15.2096 6.91345 15.2096H15.2096V6.91342C15.2096 6.14978 15.8286 5.53073 16.5923 5.53073Z" fill="#7A4BEF"/>
                </svg>
            </PlusIcon>

      </LeftSide>
    </Fade>
      <LineIcon>
        <svg width="162" height="131" viewBox="0 0 162 131" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="7.5" y1="46.1375" x2="153.811" y2="46.1375" stroke="#7474AE" stroke-width="15" stroke-linecap="round" stroke-dasharray="0.2 35"/>
        <line x1="7.50012" y1="7.5" x2="153.812" y2="7.50001" stroke="#7474AE" stroke-width="15" stroke-linecap="round" stroke-dasharray="0.2 35"/>
        <line x1="7.5" y1="84.7749" x2="153.811" y2="84.7749" stroke="#7474AE" stroke-width="15" stroke-linecap="round" stroke-dasharray="0.2 35"/>
        <line x1="7.5" y1="123.412" x2="153.811" y2="123.412" stroke="#7474AE" stroke-width="15" stroke-linecap="round" stroke-dasharray="0.2 35"/>
        </svg>
      </LineIcon>
        <RightSide>
        <ElipseIcon>
            <svg width="34" height="40" viewBox="0 0 34 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="13.2738" cy="13.2738" r="12.2783" stroke="#7A4BEF" stroke-width="1.99107"/>
            <circle cx="20.5744" cy="26.5476" r="12.942" stroke="#7A4BEF" stroke-width="0.66369"/>
            </svg>
        </ElipseIcon>
                <RigtImage src="./images/banner-image.svg" alt=""/>
                <RigtFrame />
            </RightSide>
  </Container>
  );
};

export default Banner;
