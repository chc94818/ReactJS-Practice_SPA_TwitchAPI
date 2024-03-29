import React from 'react';
import styled from "styled-components";

const ButtonContainer = styled.div`    
    display: block;    
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    background: #4E4E4E;
    text-align: center;
    padding: 5px 0px 10px 0px;
    color: #C9C9C9;
    @media (hover:hover) {
        :hover {
        background: #6E6E6E;
        color : white;
        }
    }
    @media (hover:none) {
        background: ${props => props.touch? '#6E6E6E':'#4E4E4E'};
        color: ${props => props.touch? 'white':'#C9C9C9'};
    }
    
    cursor : pointer;
`;


const LoadArrow = styled.div`
    display: inline-block;
    width: 20px;
    padding-bottom: 20px;
    border-top: solid 5px;
    border-left: solid 5px;
    transform: rotate(225deg);
`;

class LoadButton extends React.Component {
    render() {
        const {
            onClickhandler,
            onTouchStartHandler,
            onTouchEndHandler,
            touch,
        } = this.props;
        return (
            <ButtonContainer
                onClick={onClickhandler}
                onTouchStart={onTouchStartHandler}
                onTouchEnd={onTouchEndHandler}
                touch={touch}
            >
                <LoadArrow/>
            </ButtonContainer>
        );
    }
}

export default LoadButton;
