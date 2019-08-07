import React from 'react'
import ChannelCard from './ChannelCard'

class ChannelCardContainer extends React.Component{
    render() {
        const {
            channel,
        } = this.props;

        return(
            <ChannelCard channel={channel} />
        );
    }
}

export default ChannelCardContainer;