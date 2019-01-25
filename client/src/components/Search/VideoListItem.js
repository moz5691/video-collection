import React from 'react';
import {connect} from 'react-redux';
import {setSelected} from "../../actions";
import {Divider} from "semantic-ui-react";


const VideoListItem = (props)=> {


  const imageUrl = props.video.snippet.thumbnails.default.url;
  const title = props.video.snippet.title;
  return(

      <div onClick={()=>props.setSelected(props.video)}>
        <img src={imageUrl} alt={""}/>
        <p>{title}</p>
        <Divider/>
      </div>

  )

}


export default connect(null, {setSelected})(VideoListItem);