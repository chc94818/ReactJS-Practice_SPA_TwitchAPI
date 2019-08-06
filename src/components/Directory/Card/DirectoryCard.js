import React from 'react';
class DirectoryCard extends React.Component{
    render() {
        const {
            content,
        } = this.props;
        return(
            <div>
                {content}
            </div>
        );
    }
}

export default DirectoryCard;