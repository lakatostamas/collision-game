import React, { Component } from 'react';

class Canvas extends Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  componentDidMount() {
    const context = this.refs.canvas.getContext('2d');
    context.fillStyle = '#000';
    context.fillRect(0, 0, this.state.width, this.state.height);
  }

  render() {
    return (
      <canvas ref="canvas" width={this.state.width} height={this.state.height}></canvas>
    );
  }
}

export default Canvas;
