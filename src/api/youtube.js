
import axios from 'axios';

const KEY = 'AIzaSyAy1pnjoQvMMBKsHmZK63w2USu9hyDdoKA';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        maxResults: 30,
        part: 'snippet',
        key: KEY
    }
   
});