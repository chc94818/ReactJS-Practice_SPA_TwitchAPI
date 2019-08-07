import React from 'react'

class ChannelCard extends React.Component{
    render() {
        const {
            channel,
        } = this.props;
        return(
            <div>
                {channel.title}
            </div>
        );
    }
}

export default ChannelCard;