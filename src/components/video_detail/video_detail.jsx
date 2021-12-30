import React from 'react';

import styles from './video_detail.module.css'


const VideoDetail = ({video}) => (

  
  <div className={styles.content}>
    <iframe 
      id="player" 
      type="text/html" 
      width="640" 
      height="360" 
      videoId={video.id.videoId}
      src="http://www.youtube.com/embed/{video.id.videoId}?enablejsapi=1"
      
      frameborder="0">

      </iframe>
    <h1>{video.snippet.title}</h1>
    <p>{video.snippet.channelTitle}</p>


  </div>


  );

export default VideoDetail;