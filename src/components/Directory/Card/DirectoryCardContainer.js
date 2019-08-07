import React from 'react'
import DirectCard from './DirectoryCard'
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';
import NavigatorActions from '../../../actions/NavigatorActions'

class DirectoryCardContainer extends React.Component{
    constructor(props) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler() {
        const {
            history,
            onSelect,
            gameId,
            gameName,
            gameImgURL,
        } = this.props;
        //createChannels();
        onSelect(2);
        history.push('/directory/channels', {
            gameId: gameId,
            gameName: gameName,
            gameImgURL: gameImgURL,
        });
    }
    render() {
        const {
            gameId,
            gameName,
            gameImgURL,
        } = this.props;
        return (
            <DirectCard onSelect={this.clickHandler}
                        gameId={gameId}
                        gameName={gameName}
                        gameImageSrc={gameImgURL}/>
        );
    }
}

export default withRouter(DirectoryCardContainer = connect(
    (state) => ({}),
    {
        onSelect: NavigatorActions.onSelect,
    }
)(DirectoryCardContainer));