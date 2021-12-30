import React, {Component, useEffect, useState} from 'react';
import Mynavbar from './components/navbar/navbar'
import VideoList  from './components/video_list/videoList';


import styles from './app.module.css';


function App({youtube}){
  const [videos, setVideos] = useState([]); // state  

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
      setVideos(res);
    });
  
    
  } 


  return (
    <>
      <Mynavbar searchData ={searchData}></Mynavbar>
      <VideoList results={videos}/>
    </>
  )

}

export default App;
