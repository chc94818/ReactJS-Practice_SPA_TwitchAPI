import React from 'react'
import styled from "styled-components";

const CardContainer = styled.div`
    position: relative;
    display: block;
    padding-bottom: 80%;
    width: 100%;
    border-style: solid;
    border-width: 2px;    
    border-color: #737373;
    cursor: pointer;
    background: #5E5E5E;
    &:hover {
      background: #6E6E6E;
    }
`;
const CardDiv = styled.div`
    position: absolute;    
    display: flex;    
    flex-direction: column;
    width: 100%;
    height: 100%;  
`;

const ImgContainer = styled.div`
    flex-grow: 8;
    height: 75%;
    width: 100%;
`;
const LiveText = styled.div`
    position: absolute;    
    background: red;
    color: white;
    padding: 5px 5px;
    font-size: 1vw;
    top: 5px;
    left: 5px;
    height: 1.2vw;
    font-weight: bold;
    line-height: 1.2vw;
    vertical-align: middle;
`;
const Img = styled.img`
    height: 100%;
    width: 100%;
`;

const InformationDiv = styled.div`
    flex-grow: 2;
    height: 25%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;    
    border: solid 2px #737373
    border-style: solid;    
    border-width: 0 1px 1px 1px;    
    border-color: #737373;
    
    font-size: calc(8px + 0.5vw);
    @media screen and (max-width:1400px) {
        font-size: calc(12px + 1vw);
    }
    @media screen and (max-width:800px) {
         font-size: calc(1px + 3.5vw);
    }
    white-space: normal;   
`;

const LogoContainer = styled.div`
    display: inline-block;
    position: relative;
    width: 20%;
    height: 100%;
`;

const Logo = styled.img`
    position: absolute;
    left: 50%;
    top: 50%;    
    width: 100%;
    height: 100%;
    transform: translate(-50%, -50%);
`;
const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;    
    width: 78%;
    height: 100%;
     
    & *{
        margin: auto 0;
        height: 1.5em;
        line-height: 1.5em;
        font-size: 1em;
        overflow: hidden;
    }
`;

const TitleText = styled.div`
    font-weight: bold;
    color: white;
`;
const ProfileText = styled.div`
    color: white;
`;
class ChannelCard extends React.Component{
    render() {
        const {
            channel,
            onSelect,
        } = this.props;
        return(
            <CardContainer onClick={onSelect}>
                <CardDiv>
                    <ImgContainer>
                        <LiveText>LIVE</LiveText>
                        <Img alt={'game'} src={channel.imgURL}/>
                    </ImgContainer>
                    <InformationDiv>
                        <LogoContainer>
                            <Logo alt={'logo'} src={channel.profile_image_url}/>
                        </LogoContainer>
                        <TextContainer>
                            <TitleText>{channel.title}</TitleText>
                            <ProfileText>{channel.name}</ProfileText>
                            <ProfileText>{channel.viewers} 位觀眾</ProfileText>
                        </TextContainer>
                    </InformationDiv>

                </CardDiv>
            </CardContainer>
        );
    }
}

export default ChannelCard;