import React from 'react';
import DirectoryCardContainer from "../Directory/Card/DirectoryCardContainer";
import ChannelCardContainer from "./Card/ChannelCardContainer";

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
            <div>
                {channelCards}
            </div>
        );
    }
}

export default Channel;