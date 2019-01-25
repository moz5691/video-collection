import React from 'react';
import VideoListItem from './VideoListItem';
import {Segment} from "semantic-ui-react";

const VideoList = (props) => {

  const VideoItems = props.videos.map((video)=>{
    return (
      <VideoListItem
        key={video.etag}
        video={video}
      />
    )
  } )

  return (
    <div style={{"marginTop":"40px", "textAlign":"center"}}>
      <Segment>
      <h3 style={{"textAlign":"center"}}>More videos</h3>

      {VideoItems}
      </Segment>
    </div>
  );
}

export default VideoList;