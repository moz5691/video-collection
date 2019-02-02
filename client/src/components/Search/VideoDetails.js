import React from 'react';
import {Segment, Divider} from "semantic-ui-react";

const VideoDetails = ({video}) => {

  if (!video){
    return (<div>Loading...</div>)
  }

  const videoId = video.id.videoId;

  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <Segment>
      <div style={{"textAlign":"center"}}>
        <iframe src={url} width="450" height="340" frameBorder={0} title={"title"}/>
      </div>
      <Divider/>
      <div>
        <h3>{video.snippet.title}</h3>
      </div>
      <div>
        <h5>{video.snippet.description}</h5>
      </div>

    </Segment>
  );
}

export default VideoDetails;