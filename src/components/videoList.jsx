import React, { Component } from 'react';
import Video from './video'


class VideoList extends Component {
  render() {
    // console.log(this.props.results);
    
      if (this.props.results !== undefined){
        return (
          <ul>
          { this.props.results.map(res => (
            <Video key={res.id.videoId}
              video = {res}
            />

          ))}
          </ul>
        )

      }
      else{
        return null;
      }
    
  }
}

export default VideoList;