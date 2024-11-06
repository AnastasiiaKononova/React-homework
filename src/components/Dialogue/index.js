import React from 'react';
import './style.css';

function Dialogue(props) {
    const name = props.name;
  return (
    <h2 className="blue-text">Привет, {name}</h2>
  )
}

export default Dialogue