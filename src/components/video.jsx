import React, { Component } from 'react';

class Video extends Component {
  render() {
    // console.log(this.props.video);

    return (
      <li key={this.props.video.id}>
        {this.props.video}
      
      </li>
    );
  }
}

export default Video;