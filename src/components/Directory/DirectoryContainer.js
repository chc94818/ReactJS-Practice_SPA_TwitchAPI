import React from 'react';
import Directory from './Directory';

import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

class DirectoryContainer extends React.Component {


    render() {
        const {
            topGames,
            range,
        } = this.props;

        const sliceGames = range ? topGames.slice(0, range) : topGames;
        return (
            <Directory games={sliceGames}/>
        )
    }
}

export default withRouter(DirectoryContainer = connect(
    (state) => ({topGames: state.GameReducer}),
    {
    }
)(DirectoryContainer));
