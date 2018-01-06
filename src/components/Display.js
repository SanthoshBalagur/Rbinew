import React, { Component } from 'react';

class Display extends Component {
  render() {
    return (
      (this.props.IF) ?
        <div>
          {this.props.children}
        </div> : null
    );
  }
}


export default Display;
