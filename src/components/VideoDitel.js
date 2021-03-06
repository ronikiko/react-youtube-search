import React from 'react';

const VideoDitel = ({video}) => {
console.log(video)

    if( !video){
        return <div></div>
    }
    const videoUrl = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
        <div>
            <div className="ui embed">
                <iframe allowfullscreen title="video player" src={videoUrl} /> 
            </div>
            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    );
}


export default VideoDitel;