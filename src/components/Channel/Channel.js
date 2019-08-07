import React from 'react';
import ChannelCardContainer from "./Card/ChannelCardContainer";
import styled from "styled-components";
import LoadButtonContainer from '../LoadButton/LoadButtonContainer';

const ChannelsDiv = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 100px;
`;

const GameDiv = styled.div`
    display: flex;    
    flex-direction: row;
    position: relative;
    box-sizing: border-box;
    width: 95%; 
    padding: 0 5vmax;    
    margin-top: 2vmax;
    
`;
const ImgContainer = styled.div`
    display: inline-block;
    width: 15%;
    overflow: hidden;
    margin-right: 20px;
    @media screen and (max-width:1400px) {
         width: 25%;
    }
    @media screen and (max-width:800px) {
         width: 40%;
    }
`;
const Img = styled.img`
    width: 100%;    
    box-sizing: border-box;
    border-radius: 5%;    
    border: solid 1px #6E6E6E;
    
`;
const TextContainer = styled.div`
    display: inline-block;
    color: white;
    font-size: 48px;
    @media screen and (max-width:1200px) {
         font-size: 32px;
    }
    @media screen and (max-width:800px) {
         font-size: 16px;
    }
`;



const CardGrid = styled.div`
    display: grid; 
    box-sizing: border-box;
    width: 95%; 
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 3vmax 2vmax;
    @media screen and (max-width:1400px) {
         grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width:800px) {
         grid-template-columns: repeat(1, 1fr);
    }
    margin: 2vmax auto;
`;


class Channel extends React.Component{
    renderGameTitle() {
        const {
            channels,
            gameName,
            gameImgURL,
        } = this.props;
        const views = channels.map((channel)=>channel.viewers);
        const totalViews = views.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        return (
            <GameDiv >
                <ImgContainer>
                    <Img src={gameImgURL}/>
                </ImgContainer>
                <TextContainer>
                    <div>{gameName}</div>
                    <div>Viewers: {totalViews}</div>
                </TextContainer>
            </GameDiv>
        );
    }
    render() {
        const {
            channels,
            buttonSet,
            updateChannels,
        } = this.props;
        const channelCards = channels.map((channel) => {
            return (
                <ChannelCardContainer
                    key={channel.id}
                    channel={channel}
                />
            );
        });
        return(
            <ChannelsDiv>
                {buttonSet ? this.renderGameTitle() : ""}
                <CardGrid>
                    {channelCards}
                </CardGrid>
                {buttonSet ? <LoadButtonContainer handler={() => updateChannels()}/> : ""}
            </ChannelsDiv>
        );
    }
}

export default Channel;