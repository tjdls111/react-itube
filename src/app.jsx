import React, {Component, useEffect, useState} from 'react';
import './app.css';
import Mynavbar from './components/navbar/navbar'
import VideoList  from './components/video_list/videoList';

import axios from 'axios';
import { Navbar } from 'react-bootstrap';

// class App extends Component {
//   state = {
//     results : undefined
//   }

//   getPopular = ()=>{
//     const url = `https://www.googleapis.com/youtube/v3/videos?key=${process.env.REACT_APP_YOUTUBE_API_KEY}&videos?part=snippet&chart=mostPopular&maxResults=25`
//     console.log(url);
//     axios({
//       method:'get',
//       url : url,
//     })
//     .then((res)=>{
//         const results = res.data.items;
//         this.setState({results});

//     })
//     .catch((err)=>{
//       console.log(err);
//     })
    

//   }

//   searchData = (searchWord)=>{
    
//     const url = `https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_YOUTUBE_API_KEY}&part=snippet&maxResults=25&q=${searchWord}`
//     console.log(url);
//     axios({
//       method:'get',
//       url : url,
//     })
//     .then((res)=>{
//       const results = res.data.items;
//       this.setState({results});
    

//     })
//     .catch((err)=>{
//       console.log(err);
//     })
    
    
//   } 

//   render(){
//     this.getPopular()

//     return (
//       <>
//         <Mynavbar
//           handleData = {this.searchData}
        
//         ></Mynavbar>
        
//         <VideoList
//           results = {this.state.results}
//         ></VideoList>
      
//       </>
//       )
//   }

// }

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
    
    const url = `https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_YOUTUBE_API_KEY}&part=snippet&maxResults=25&q=${searchWord}`
    console.log(url);
    axios({
      method:'get',
      url : url,
    })
    .then((res)=>{
      const results = res.data.items;
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
