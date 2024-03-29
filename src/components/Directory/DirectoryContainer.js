import React from 'react';
import Directory from './Directory';
import GameActions from '../../actions/GameActions';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

class DirectoryContainer extends React.Component {


    render() {
        const {
            topGames,
            range,
            updateGames,
            buttonSet
        } = this.props;

        const sliceGames = range ? topGames.slice(0, range) : topGames;
        return (
            <Directory games={sliceGames}
                       updateGames={() => updateGames(12)}
                       buttonSet={buttonSet}
            />
        )
    }
}

DirectoryContainer.defaultProps = {
    buttonSet: true,
};
export default withRouter(DirectoryContainer = connect(
    (state) => ({topGames: state.GameReducer}),
    {
        updateGames: GameActions.updateGames,
    }
)(DirectoryContainer));
