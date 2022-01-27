import React from 'react';
import styled from "styled-components";
import Fade from 'react-reveal/Fade';
import { Rotate, Slide, Zoom } from 'react-reveal';

const Container = styled.div`
    padding: 0 150px;
`
const MeetContainer = styled.div`
    display: flex;
    gap: 120px;
    margin-top: 124px;
    /* align-items: center; */
    justify-content: space-between;
`
const BackCircle = styled.img`
    width: 463px;
    height: 463px;
    border-radius: 257px;
`
const SplashImg = styled.img` 
    position: absolute;
    width: 414px;
    height: 412px;
    top: 43px;
    left: 150px;
`
const MeetImg = styled.img` 
    position: absolute;
    width: 412px;
    height: 412px;
    /* border-radius: 50%; */
    border-bottom-right-radius: 50%;
    border-top-right-radius: 50%;
    border-bottom-left-radius: 50%;
    top: 50px;
    left: 150px;
`
const LeftSide = styled.div`
position: relative;


  
`
const RighSide = styled.div`

`
const Title = styled.h2`
font-weight: 800;
font-size: 34px;
color: #000000;
`
const InfoParagraph = styled.p`
font-weight: 600;
font-size: 18px;
color: #7474AE;
font-style: semi-bold;
line-height: 25px;
text-align: left;
margin-bottom: 10px;
`
const ConnectContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 117px;
    /* align-items: center; */
    gap: 20px;

`
const ConImg = styled.img`
width: 555px;
height: 412px;
`
const BuildImg = styled.img`
width: 555px;
height: 412px;
`
const BuildContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 117px;
    /* align-items: center; */
    gap: 20px;
`
const BuildDiv = styled.div`

`
const MeetComponent = () => {
  return (
  <Container>
    <Fade bottom>
      <MeetContainer>
      <LeftSide>
        <BackCircle src="./images/back-circle.svg" alt="" />
        <SplashImg src="./images/back-splash.svg" alt="" />
        <MeetImg src="./images/image-meet.svg" alt="" />
      </LeftSide>
      <RighSide>
        <Zoom Left>
          <Title>Meet</Title>
        </Zoom>
          <InfoParagraph>
            There’s a reason why most companies are founded by multiple co-founders and not solo founders. 
            They complement each other and have each others’ backs. 
            Find your match today.
            </InfoParagraph>
            <InfoParagraph>
            Get the funding your startup needs to get your startup to the next level.
            OR Receieve the funding your startup needs by pitching infront of over 200 VCs actively investing in startups.
          </InfoParagraph>
      </RighSide>
      </MeetContainer>
      </Fade>

<Fade Bottom>
     <ConnectContainer>
         <div>
           <Zoom Left>
            <Title>Connect</Title>
           </Zoom>
           <Fade Bottom>    
          <InfoParagraph>
                Building a startup is not an easy feat. However, it doesn’t have to be that hard either. Enter kofoundme, 
                the global community enabling members to discuss ideas, find co-founders, launch startups, connect with freelancers, get startup resources, and so much more.
            </InfoParagraph>
            <InfoParagraph>
            From advisors, investors, mentors, entrepreneurs, 
            cofoundme provides you with multiple solutions to find the perfect fit for your startup.
          </InfoParagraph>
           </Fade>
         </div>
         <Rotate Left>
        <div>
           <ConImg src="./images/connect-image.svg" alt=""/>
        </div>
         </Rotate>
      </ConnectContainer>
</Fade>

  <BuildContainer>
  <Rotate Bottom>
        <BuildDiv>
            <BuildImg src="./images/build-bg.svg" alt=""/>
      </BuildDiv>
  </Rotate>

      <div>
        <Zoom Left>
          <Title>Build</Title>
        </Zoom>
          <Fade Bottom>
            <InfoParagraph>
            Curated programs and courses to help you expand your startup knowledge from zero to one.
              </InfoParagraph>
              <InfoParagraph>
              From advisors, investors, mentors, entrepreneurs, kofoundme
              provides you with multiple solutions to find the perfect fit for your startup.
            </InfoParagraph>
          </Fade>
         </div>
      </BuildContainer>
  </Container>
  );
};

export default MeetComponent;
