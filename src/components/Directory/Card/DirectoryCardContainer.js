import React from 'react'
import DirectCard from './DirectoryCard'
class DirectoryCardContainer extends React.Component{
    render() {
        const {
            gameId,
            gameName,
            gameImgURL,
        } = this.props;
        return (
            <DirectCard gameId={gameId} gameName={gameName} gameImageSrc={gameImgURL}/>
        );
    }
}

export default DirectoryCardContainer;