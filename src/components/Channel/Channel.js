import React from 'react';
import DirectoryCardContainer from "../Directory/Card/DirectoryCardContainer";
import ChannelCardContainer from "./Card/ChannelCardContainer";
import styled from "styled-components";

const ChannelsDiv = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
    render() {
        const {
            channels,
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
                <CardGrid>
                    {channelCards}
                </CardGrid>
            </ChannelsDiv>
        );
    }
}

export default Channel;