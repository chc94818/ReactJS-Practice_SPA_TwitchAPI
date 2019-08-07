import React from 'react'
import ChannelCard from './ChannelCard'
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';
import NavigatorActions from '../../../actions/NavigatorActions'

class ChannelCardContainer extends React.Component{
    constructor(props) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler() {
        const {
            history,
            onSelect
        } = this.props;
        // link to /live
        history.push({pathname: `/live`});
        onSelect(-1);
    }
    render() {
        const {
            channel,
        } = this.props;

        return(
            <ChannelCard onSelect={this.clickHandler}
                         channel={channel} />
        );
    }
}
export default withRouter(ChannelCardContainer = connect(
    (state) => ({channels: state.ChannelReducer}),
    {
        onSelect: NavigatorActions.onSelect,
    }
)(ChannelCardContainer));