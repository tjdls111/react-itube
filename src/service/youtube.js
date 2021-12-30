import axios from 'axios';

class Youtube{
  constructor(){
    this.key = process.env.REACT_APP_YOUTUBE_API_KEY;

    this.getrequestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
  }

  mostPopular() {
    return fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
      this.getrequestOptions
      )
    .then(response => response.json())
    .then(result => result.items)
    .catch(error => console.log('error', error));
  }

  search(searchWord){
    const url = `https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_YOUTUBE_API_KEY}&part=snippet&maxResults=25&q=${searchWord}&type=video`
    // console.log(url);
    return axios({
      method:'get',
      url : url,
    })
    .then((res)=>{
      const results = res.data.items.map(item=>({
        ...item, 
        id:item.id.videoId
      })
      )
      return results
    })
    .catch((err)=>{
      console.log(err);
    })
    }
    
}

export default Youtube;