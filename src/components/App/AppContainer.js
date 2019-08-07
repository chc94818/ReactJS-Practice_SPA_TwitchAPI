import React from 'react';
import App from './App';
import {connect} from 'react-redux';
import ChannelActions from '../../actions/ChannelActions'
import WatchingActions from '../../actions/WatchingActions'
import GameActions from '../../actions/GameActions'
class AppContainer extends React.Component {
    componentDidMount() {
        const {
            loadTopKChannels,
            createGames,
            createWatching,
        } = this.props;
        loadTopKChannels(8);
        createGames(16);
        createWatching();
    }
    render() {
        return (
            <App/>
        )
    }
}

export default AppContainer = connect(
    (state) => ({channels: state.ChannelReducer}),
    {
        loadTopKChannels: ChannelActions.loadTopKChannels,
        createGames: GameActions.createGames,
        createWatching: WatchingActions.createWatching,
    }
)(AppContainer);

