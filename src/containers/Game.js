import React, { Component } from 'react';
import './App.css';
import Canvas from '../components/Canvas';

class Game extends Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  render() {
    return (
      <Canvas>
      </Canvas>
    );
  }
}

export default Game;
