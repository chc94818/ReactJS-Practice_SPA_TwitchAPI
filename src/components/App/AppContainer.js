import React from 'react';
import App from './App';
import {connect} from 'react-redux';
import GameActions from '../../actions/GameActions'
class AppContainer extends React.Component {
    componentDidMount() {
        const {
            createGames,
        } = this.props;
        createGames(16);
    }

    render() {
        return (
            <App/>
        )
    }
}

export default AppContainer = connect(
    (state) => ({}),
    {
        createGames: GameActions.createGames,
    }
)(AppContainer);

