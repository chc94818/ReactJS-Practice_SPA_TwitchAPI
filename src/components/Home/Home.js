import React from 'react';
import styled from 'styled-components';

const HomeDiv = styled.div`
    display: flex;
    width: 100vw;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
class Home extends React.Component {
    render() {

        return (
            <HomeDiv>
            home
            </HomeDiv>
        );
    }
}

export default Home;
