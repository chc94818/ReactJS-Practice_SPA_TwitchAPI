import React from 'react';
import styled from 'styled-components';
import DirectoryCardContainer from "./Card/DirectoryCardContainer";
import LoadButtonContainer from '../LoadButton/LoadButtonContainer';

const DirectoryDiv = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;    
    padding-bottom: 100px;
`;

const CardGrid = styled.div`
    display: grid; 
    box-sizing: border-box;
    width: 95%; 
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 3vmax 2vmax;
    @media screen and (max-width:1400px) {
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
            games,
            buttonSet,
            updateGames,
        } = this.props;
        const gameCards = games.map((game) => {
            return (
                <DirectoryCardContainer
                    key={game.id}
                    gameId={game.id}
                    gameName={game.name}
                    gameImgURL={game.imgURL}
                />
            );
        });

        return(
          <DirectoryDiv>
              <CardGrid>
                 {gameCards}
              </CardGrid>
              {buttonSet ? <LoadButtonContainer handler={updateGames}/>: ""}
          </DirectoryDiv>
        );
    }
}

export default Directory;