import React, { Component } from 'react';

class Square extends Component {
  constructor(props) {
    super(props);
    console.log('Компонента Square создана');
  }

  componentDidMount() {
    console.log('Компонента Square примонтирована');
  }

  componentDidUpdate() {
    console.log('Компонента Square обновлена');
  }

  componentWillUnmount() {
    console.log('Компонента Square отмонтируется');
  }

  render() {
    console.log('Компонента Square рендерится');
    
    return (
      <div style={{ width: '100px', height: '100px', backgroundColor: 'yellow' }}>
      </div>
    );
  }
}

export default Square;
