import axios from 'axios';
import SEARCHRESULT from '../data/searchResultVideos.json'
class Youtube{
  constructor(){
    this.key = process.env.REACT_APP_YOUTUBE_API_KEY;
    this.youtube = axios.create({
      baseURL: 'https://www.googleapis.com/youtube/v3',
      params:{key: this.key},

    });

    this.getrequestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
  }

  async mostPopular() {
    const response = await this.youtube.get('videos', {
      params:{
        part: 'snippet',
        chart:'mostPopular',
        maxResults:25,
      }
    });

    return response.data.items;

    // try {
    //   const response = await fetch(
    //     `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
    //     this.getrequestOptions
    //   );
    //   const result_1 = await response.json();
    //   return result_1.items;
    // } catch (error) {
    //   return console.log('error', error);
    // }
  }

  async search(searchWord){
    const url = `https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_YOUTUBE_API_KEY}&part=snippet&maxResults=25&q=${searchWord}&type=video`


    try {
      const res = await axios({
        method: 'get',
        url: url,
      });
      let temp_res = []
      if (res) {
        temp_res = res.data.items
      }
      else{
        temp_res= SEARCHRESULT.items
      }

      // 개발 시 mock data
      temp_res= SEARCHRESULT.items 


    const results = temp_res.map(item => ({
      ...item,
      id: item.id.videoId
    })
    );
    return results;
    } 
    catch (err) {
      console.log(err);
    }
    }
    
}

export default Youtube;