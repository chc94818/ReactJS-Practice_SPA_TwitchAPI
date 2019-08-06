import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
    position: relative;
    display: block;
    padding-bottom: 140%;   
    background: #FF0000; 
`;
const CardDiv = styled.div`
    position: absolute;
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    background: green;
`;

const ImgContainer = styled.div`
    flex-grow: 10;
    width: 100%;
    overflow: hidden;
    background: blue;
`;
const Img = styled.img`
    width: 100%;    
    box-sizing: border-box;
`;

const InformationDiv = styled.div`
    flex-grow: 2;
    width: 100%;
    box-sizing: border-box;
    
    overflow: hidden;
    background: orange;
    
    padding: 20px;
`;
class DirectoryCard extends React.Component{
    render() {
        const {
            content,
        } = this.props;
        return(
            <CardContainer>
                <CardDiv>
                    <ImgContainer>
                        <Img />;
                    </ImgContainer>
                    <InformationDiv>
                        {content}
                    </InformationDiv>

                </CardDiv>
            </CardContainer>
        );
    }
}

export default DirectoryCard;