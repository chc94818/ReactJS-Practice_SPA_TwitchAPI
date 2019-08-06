import React from 'react';
import App from './App';
import {connect} from 'react-redux';

class MainContainer extends React.Component {


    render() {
        return (
            <App/>
        )
    }
}

export default MainContainer = connect(
)(MainContainer);
