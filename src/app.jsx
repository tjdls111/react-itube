import React, {Component, useEffect, useState} from 'react';
import Mynavbar from './components/navbar/navbar'
import VideoList  from './components/video_list/videoList';

import axios from 'axios';

import styles from './app.module.css';


function App(){
  const [videos, setVideos] = useState([]); // state

  // 마운트, 업데이트마다 호출
  useEffect(()=>{
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`, requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));

  }, []); // 마운트되었을 때만 호출되게 할 것.


  const searchData = (searchWord)=>{
    
    const url = `https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_YOUTUBE_API_KEY}&part=snippet&maxResults=25&q=${searchWord}&type=video`
    console.log(url);
    axios({
      method:'get',
      url : url,
    })
    .then((res)=>{
      let results = res.data.items;
      results = results.map(item=>({
        ...item, 
        id:item.id.videoId
      })
      )
      setVideos(results);
    

    })
    .catch((err)=>{
      console.log(err);
    })
    
    
  } 


  return (
    <>
      <Mynavbar searchData ={searchData}></Mynavbar>
      <VideoList results={videos}/>
    </>
  )

}

export default App;
