import React from 'react';
import Channel from './Channel'
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';
//import NavigatorActions from '../../../actions/NavigatorActions'
//import ChannelActions from '../../../actions/ChannelActions'

class ChannelContainer extends React.Component{
    render() {
        const {
            channels,
            range,
        } = this.props;

        const sliceChannels = range ? channels.slice(0, range) : channels;
        return(
            <Channel
                channels={sliceChannels}
            />
        );
    }
}

export default withRouter(ChannelContainer = connect(
    (state) => ({channels: state.ChannelReducer}),
    {
    }
)(ChannelContainer));
