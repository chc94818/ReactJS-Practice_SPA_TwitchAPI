import React from 'react';
import styled from "styled-components";


const LiveContainer = styled.div`
    display: flex;    
    position: relative;
    background: #5E5E5E;
    flex-direction: column;
    font-weight: bold;
    color: white;
    font-size: 0;
    width: 60%
    padding-bottom: 48%;
    @media screen and (max-width:1400px) {
        width: 80%;
        padding-bottom: 56%;
    }
    @media screen and (max-width:800px) {
        width: 100%;
        padding-bottom: 80%;
    }  
    
`;

const LiveDiv = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    border-style: solid;
    border-width: 2px;    
    border-color: #737373;
    width: 100%;
    height: 100%;
`;

const IframeDiv =  styled.div`
    display: block; 
    width: 100%;
    height: 87.5%;
`;

const InformationDiv = styled.div`
    display: flex;
    width: 100%;
    height: 12.5%;
    flex-direction: row;
        
    justify-content: flex-start;
    align-items: center;
    
    box-sizing: border-box;
    border-style: solid;
    border-width: 2px 0px 0px 0px;    
    border-color: #737373;
    
    font-size: calc(12px + 0.5vw);
    @media screen and (max-width:1400px) {
        font-size: calc(6px + 1vw);
    }
    @media screen and (max-width:800px) {
         font-size: calc(1px + 2vw);
    }
`;

const LogoContainer = styled.div`
    display: inline-block;
    position: relative;
    width: 10%;
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
    flex-direction: column;
    flex-grow: 1;
    display: flex;
    justify-content: space-between;
    height: 100%;
    
    & *{
        margin: auto 0;
        height: 1.5em;
        line-height: 1.5em;
        font-size: 1em;        
        overflow: hidden;
    }
    padding-left: 2px;
`;

const TitleText = styled.div`
    font-weight: bold;
    color: white;
    
    
`;
const ProfileText = styled.div`
    color: white;
`;


class Live extends React.Component {
// <iframe
// src={`https://player.twitch.tv/?channel=${watchChannel.name}&muted=true&controls=true`}
// title={'liveVideo'}
// style={{
//     position: 'absolute',
//     width: '100%',
//     height: '100%',
//     border: 'none',
// }}
// allowFullScreen
// />
    render() {
        const {watchChannel} = this.props;
        return (
            <LiveContainer onClick={this.clickHandler}>
                <LiveDiv>
                    <IframeDiv>
                        <iframe
                            src={`https://player.twitch.tv/?channel=${watchChannel.name}&muted=true&controls=true`}
                            title={'liveVideo'}
                            style={{
                                width: '100%',
                                height: '100%',
                                border: 'none',
                            }}
                            allowFullScreen
                        />
                    </IframeDiv>
                    <InformationDiv>
                        <LogoContainer>
                            <Logo alt={'logo'} src={watchChannel.profile_image_url}/>
                        </LogoContainer>
                        <TextContainer>
                            <TitleText>{watchChannel.title}</TitleText>
                            <ProfileText>{watchChannel.name}</ProfileText>
                            <ProfileText>{watchChannel.viewers} 位觀眾</ProfileText>
                        </TextContainer>
                    </InformationDiv>
                </LiveDiv>
            </LiveContainer>

        );
    }
}

export default Live;
