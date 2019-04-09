import React from 'react';

const VideoItem = props => {
   
    return (
        <div 
        onClick={ () => props.onVideoSelect(props.video)}
        className="item">
            <img 
                className="ui image"
                src={props.video.snippet.thumbnails.default.url} alt={props.video.title} 
            />
            <div className="ui content">
                <div className="ui header">{props.video.snippet.title}</div>
            </div>
        </div>
    );
}

export default VideoItem;