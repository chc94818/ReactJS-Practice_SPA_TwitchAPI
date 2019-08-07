import React from 'react';
import Channel from './Channel'
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';
import ChannelActions from '../../actions/ChannelActions'

class ChannelContainer extends React.Component{
    render() {
        const {
            channels,
            range,
            location,
            updateChannels,
            buttonSet,
        } = this.props;

        const sliceChannels = range ? channels.slice(0, range) : channels;
        return(
            <Channel
                channels={sliceChannels}
                updateChannels={() => updateChannels(location.state.gameId, 24)}
                buttonSet={buttonSet}
                gameName={location.state? location.state.gameName:""}
                gameImgURL={location.state? location.state.gameImgURL:""}
            />
        );
    }
}
ChannelContainer.defaultProps = {
    buttonSet: true,
};
export default withRouter(ChannelContainer = connect(
    (state) => ({channels: state.ChannelReducer}),
    {
        updateChannels: ChannelActions.updateChannels,
    }
)(ChannelContainer));
