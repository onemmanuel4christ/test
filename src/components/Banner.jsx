import React from 'react';

import styled from "styled-components";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 176px;
    /* margin-top: 53px; */
    padding-right: 153px;
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
const LeftSide = styled.div`
  padding: 20px;
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
    /* margin-top: 54px; */
position: relative;
` 
const RigtFrame = styled.div`
    width: 350px;
    height: 473px;
    border: 14px solid #7A4BEF;
    margin-right: 67px;
    margin-top: 100px;
    z-index: 10;
`
const RigtImage = styled.img`
  position: absolute;
  top: -183px;
  width: 583px;
  height: 873px;
  left: -140px;
  
`
const Banner = () => {
  return (
  <Container>
   
      <LeftSide>
        <SVGDes>
            <svg width="65" height="21" viewBox="0 0 65 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L16.4495 17.0777L26.0532 5.38483L37.5359 17.0777L50.0625 5.38483L64.0506 19.5833" stroke="#7A4BEF" stroke-width="2.65476"/>
            </svg>
        </SVGDes>
          <TextWrap>
            <BannetImage src="./images/next.svg" />
          </TextWrap>
        <LineWrap>
            <BannetLine src="./images/banner-line.svg" />
        </LineWrap>
        <Desc>are you an entrepreneur looking for an amazing idea to be part of ?</Desc>
        <Button>Get Started</Button>
        <SVGDes2>
            <svg width="70" height="80" viewBox="0 0 70 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.3106 51.8644L22.2118 13.3652L55.1025 33.3953L21.3106 51.8644Z" stroke="#7A4BEF" stroke-width="1.99107" stroke-linejoin="round"/>
            <path d="M24.334 66.9356L25.289 26.1379L60.1433 47.3639L24.334 66.9356Z" stroke="#7A4BEF" stroke-width="0.66369" stroke-linejoin="round"/>
            </svg>
            </SVGDes2>
      </LeftSide>
    <RightSide>
        <RigtFrame>
        <RigtImage src="./images/banner-image.svg" alt=""/>
        </RigtFrame>
    </RightSide>
  </Container>
  );
};

export default Banner;
