import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import styled from 'styled-components'
import NavigatorContainer from '../Navigator/NavigatorContainer'
import HomeContainer from '../Home/HomeContainer'
import DirectoryContainer from '../Directory/DirectoryContainer';
import LiveContainer from '../Live/LiveContainer';

const AppDiv = styled.div`
    display: flex;
    background: #3B3B3B;
    width: 100vw;
    justify-content: center;
    align-items: center;
`;
const BodyDiv = styled.div`
    display: flex;
    background: #3B3B3B;    
    flex-direction: column;
    min-width : 100vw;
    min-height : 100vh;
`;
class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <BodyDiv>
                    <NavigatorContainer />
                    <AppDiv>
                        <Route exact path="/" component={HomeContainer}/>
                        <Route exact path="/live" component={LiveContainer}/>
                        <Route exact path="/directory" component={DirectoryContainer}/>
                    </AppDiv>
                </BodyDiv>
            </BrowserRouter>

        )
    }
}

export default App;
