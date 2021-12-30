import React, {Component} from 'react';
import './app.css';
import Mynavbar from './components/navbar'
import VideoList  from './components/videoList';

import axios from 'axios';

class App extends Component {
  state = {

    results : undefined
  }

  searchData = (searchWord)=>{
    
    const url = `https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_YOUTUBE_API_KEY}&part=snippet&maxResults=25&q=${searchWord}`
    console.log(url);
    axios({
      method:'get',
      url : url,
    })
    .then((res)=>{
        this.results = res.data.items;

    })
    .catch((err)=>{
      console.log(err);
    })
    
    
  } 

  render(){

    return (
      <>
        <Mynavbar
          handleData = {this.searchData}
        
        ></Mynavbar>
        
        <VideoList
          results = {this.state.results}
        ></VideoList>
      
      </>
      )
  }

}

export default App;
