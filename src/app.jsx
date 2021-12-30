import React, {Component} from 'react';
import './app.css';
import Mynavbar from './components/navbar'
import VideoList  from './components/videoList';

import axios from 'axios';

class App extends Component {
  state = {
    results : undefined
  }

  getPopular = ()=>{
    const url = `https://www.googleapis.com/youtube/v3/videos?key=${process.env.REACT_APP_YOUTUBE_API_KEY}&videos?part=snippet&chart=mostPopular&maxResults=25`
    console.log(url);
    axios({
      method:'get',
      url : url,
    })
    .then((res)=>{
        const results = res.data.items;
        this.setState({results});

    })
    .catch((err)=>{
      console.log(err);
    })
    

  }

  searchData = (searchWord)=>{
    
    const url = `https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_YOUTUBE_API_KEY}&part=snippet&maxResults=25&q=${searchWord}`
    console.log(url);
    axios({
      method:'get',
      url : url,
    })
    .then((res)=>{
      const results = res.data.items;
      this.setState({results});
    

    })
    .catch((err)=>{
      console.log(err);
    })
    
    
  } 

  render(){
    this.getPopular()

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
