import React from 'react'
import DirectCard from './DirectoryCard'
class DirectoryCardContainer extends React.Component{
    render() {
        const {
            content,
        } = this.props;

        return (
            <DirectCard content={content}/>
        );
    }
}

export default DirectoryCardContainer;