import React from 'react';
import Directory from './Directory';
import {connect} from 'react-redux';

class DirectoryContainer extends React.Component {


    render() {
        const {
            range,
        } = this.props;
        return (
            <Directory range={range} />
        )
    }
}
DirectoryContainer.defaultProps = {
    range: 8,
};
export default DirectoryContainer = connect(
)(DirectoryContainer);
