import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
    background: #5E5E5E;
    position: relative;
    display: block;
    padding-bottom: 160%;
    width: 100%;
    
    
    border-style: solid;
    border-width: 2px;    
    border-color: #737373;
`;
const CardDiv = styled.div`
    position: absolute;    
    display: flex;    
    flex-direction: column;
    width: 100%;
    height: 100%;  
`;

const ImgContainer = styled.div`
    flex-grow: 8;
    height: 85%;
    width: 100%;
`;
const Img = styled.img`
    height: 100%;
    width: 100%;
`;

const InformationDiv = styled.div`
    flex-grow: 2;
    height: 15%;
    width: 100%;
    box-sizing: border-box;
    font-size: 16px;  
    font-weight: bold;
    line-height: 24px;
    border-style: solid;
    border-width: 2px 0px 0px 0px;    
    border-color: #737373;
    padding: 2px;
    color: white;
    @media screen and (max-width:1400px) {
        font-size: 14px;
        line-height: 18px;
        height: 36px;
    }
    @media screen and (max-width:800px) {
        font-size: 8px;
        line-height: 12px;
        height: 24px;
    }
    overflow: hidden;
    white-space: normal;    
`;
class DirectoryCard extends React.Component{
    render() {
        const {
            onSelect,
            gameId,
            gameName,
            gameImageSrc,
        } = this.props;

        return(
            <CardContainer onClick={onSelect}>
                <CardDiv>
                    <ImgContainer>
                        <Img alt={'game'} src={gameImageSrc}/>
                    </ImgContainer>
                    <InformationDiv>
                        {gameName}
                    </InformationDiv>

                </CardDiv>
            </CardContainer>
        );
    }
}

export default DirectoryCard;