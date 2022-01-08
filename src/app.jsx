import React, {Component, useEffect, useState} from 'react';
import Mynavbar from './components/navbar/navbar'
import VideoList  from './components/video_list/videoList';


import styles from './app.module.css';
import VideoDetail from './components/video_detail/video_detail';


function App({youtube}){
  const [videos, setVideos] = useState([]); // state  
  const [selectedVideo, setSelectedVideo] = useState(null);


  // 마운트, 업데이트마다 호출
  useEffect(()=>{
    youtube.mostPopular()
    .then((res)=>{
      setVideos(res);
    })

  }, []); // 마운트되었을 때만 호출되게 할 것.


  const searchData = (searchWord)=>{
    youtube
    .search(searchWord)
    .then((res)=>{
      setSelectedVideo(null);
      setVideos(res);
    });
  } 

  const selectVideo = (video)=>{
    setSelectedVideo(video); 
  }


  return (
    <>
      <Mynavbar searchData ={searchData}></Mynavbar>
      <section className={styles.content}>
        {selectedVideo && <div className={styles.mainVideo}>          
            <VideoDetail
              video={selectedVideo}>
            </VideoDetail>
          </div>
        }
        <div className={styles.sideVideos}>
          <VideoList results={videos} onVideoClick={selectVideo} display={selectedVideo? 'list' : 'grid'}/>

        </div>

      </section>
    </>
  )

}

export default App;
