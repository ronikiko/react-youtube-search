import React from 'react';
import VideoItem from './VideoItem';


const VideoList = ({ videos, onVideoSelect }) => {
   
    const allvideos = videos.map(video => {
        return (
            <div 
            className="ui middle aligned selection list"
            key={video.id.videoId ? video.id.videoId : video.id.channelId} >
                <VideoItem 
                    video={video} 
                    onVideoSelect={onVideoSelect}
                    />
            </div>
        );
    })

    return <div>{allvideos}</div>
}

export default VideoList;