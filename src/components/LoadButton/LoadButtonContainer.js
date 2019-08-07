import React from 'react';
import LoadButton from './LoadButton'

class LoadButtonContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            touch: false,
        };
        this.ToggleHandler = this.ToggleHandler.bind(this);
    }

    ToggleHandler() {
        this.setState({touch: !this.state.touch});
    }

    render() {
        const {
            handler
        } = this.props;
        return (
            <LoadButton
                onClickhandler={handler}
                onTouchStartHandler={this.ToggleHandler}
                onTouchEndHandler={this.ToggleHandler}
                touch={this.state.touch}
            />
        );
    }
}

export default LoadButtonContainer;
