import React, { Component } from 'react';

class Video extends Component {
  render() {
    console.log(this.props.video);

    return (
      <li key={this.props.video.id.videoId}>
        <h1>{this.props.video}</h1>
      
      </li>
    );
  }
}

export default Video;