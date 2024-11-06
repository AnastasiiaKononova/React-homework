import React, { Component } from 'react';
import './style.css';

class Lamp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            on: false
        }
    }

    toggleLamp = () => {
        this.setState((prevState) => ({
          isOn: !prevState.isOn, 
        }));
      };
    
      render() {
        return (
          <article className="lamp-container">
            <div className={`lamp ${this.state.isOn ? 'lamp-on' : 'lamp-off'}`}></div>
            <button onClick={this.toggleLamp}>Выключатель</button>
          </article>
        );
      }
    }
    
    export default Lamp;