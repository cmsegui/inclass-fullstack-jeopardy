import React, { Component } from 'react';
import { TileStyle } from '../styles/Game';

class Question extends Component {
    constructor(){
        super();
        this.state = {
            active: false
        }
    }

    _toggleActive = () => {
        this.setState({active: !this.state.active});
    }

  render() {
      if (this.state.active){
          return <div>active question</div>;
      }
    return (
      <TileStyle question={true}>
        {this.props.question.value}
      </TileStyle>
    );
  }
}

export default Question;
Contact GitHub API Training Shop Blog About
