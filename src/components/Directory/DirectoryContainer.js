import React from 'react';
import Directory from './Directory';
import {connect} from 'react-redux';

class DirectoryContainer extends React.Component {


    render() {
        return (
            <Directory>
                directory
            </Directory>
        )
    }
}

export default DirectoryContainer = connect(
)(DirectoryContainer);
