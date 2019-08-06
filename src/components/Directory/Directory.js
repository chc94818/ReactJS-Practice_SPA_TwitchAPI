import React from 'react';
import styled from 'styled-components';
import DirectoryCardContainer from "./Card/DirectoryCardContainer";

const DirectoryDiv = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
`;

const CardGrid = styled.div`
    display: grid; 
    box-sizing: border-box;
    width: 95%; 
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 3vmax 2vmax;
    @media screen and (max-width:1200px) {
         grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (max-width:800px) {
         grid-template-columns: repeat(2, 1fr);
    }
    margin: 2vmax auto;
`;
class Directory extends React.Component{
    render() {
        const {
            range,
        } = this.props;
        const cards = Array.from({length: range}, (v, k) => k+1).map((value, key)=> <DirectoryCardContainer key={key} content={value}/>);
        return(
          <DirectoryDiv>
              <CardGrid>
                  {cards}
              </CardGrid>
          </DirectoryDiv>
        );
    }
}

export default Directory;