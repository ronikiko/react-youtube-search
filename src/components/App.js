import React from 'react';
import SearchForm from './SearchForm';
import youtube from '../api/youtube';
import VideoList from './VideoList';
import VideoDitel from './VideoDitel';

class App extends React.Component {

    state = {
        videos: [],
        selectedVideo: null
    }
    componentDidMount(){
        this.onFormSubmit('git');
    }
    onFormSubmit = async (msg) => {
    const response = await youtube.get('/search', {
        params: {
            q: msg
        }
    });
    this.setState({videos: response.data.items, selectedVideo: response.data.items[0]})
    }
   
    onVideoSelect = (video) => {
        this.setState({selectedVideo: video});
    }

    render(){
  
        return (
                <div className="ui container">
                    <div className="ui segment">
                        <SearchForm onRK={this.onFormSubmit} />
                    <div className = "ui grid"
                    style = {{ height: 'auto'}} >
                    <div className="ui row">
                        <div className="ten wide column">
                             <VideoDitel video={this.state.selectedVideo} />
                        </div>
                        <div className="six wide column" style={{height: '500px',overflow: 'auto'}}>
                        <VideoList 
                            videos={this.state.videos}
                            onVideoSelect={this.onVideoSelect}
                            />
                        </div>
                        </div>
                        Total images Found: {this.state.videos.length}
                    </div> 
                    </div>         
                </div>
           
        );
    }
}

export default App;