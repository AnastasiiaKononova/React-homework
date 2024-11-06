import React, { Component } from 'react';
import Square from './Square';

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSquareMounted: false
    };
  }

  toggleSquare = () => {
    this.setState(prevState => ({
      isSquareMounted: !prevState.isSquareMounted
    }));
  };

  render() {
    return (
      <div>
        <button onClick={this.toggleSquare}>
          {this.state.isSquareMounted ? 'Удалить квадрат' : 'Добавить квадрат'}
        </button>
        {this.state.isSquareMounted && <Square />}
      </div>
    );
  }
}

export default Parent;
