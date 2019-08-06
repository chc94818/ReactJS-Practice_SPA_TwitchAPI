import React from 'react';
import DirectoryCardContainer from "./Card/DirectoryCardContainer";

class Directory extends React.Component{
    render() {
        const {
            range,
        } = this.props;
        const cards = Array.from({length: range}, (v, k) => k+1).map((value)=> <DirectoryCardContainer content={value}/>);
        return(
          <div>
              {cards}
          </div>
        );
    }
}

export default Directory;