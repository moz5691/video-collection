import React, {Component} from 'react';
import VideoPlayer from './Player/VideoPlayer';
import VideoPlayerList from './Player/VideoPlayerList';
import {Grid, Segment} from 'semantic-ui-react';


class VideoPlayerMain extends Component {

  state = {
    url: null
  }

  setUrl=(url)=>{
    console.log('setUrl', url)
    this.setState({url})
  }
  render() {
    return (
      <div >
        <Grid stackable padded>
          <Grid.Column width={10}>
            <Segment>
            <VideoPlayer url={this.state.url} />
            </Segment>
          </Grid.Column>
          <Grid.Column width={6}>
            <Segment>
            <VideoPlayerList setUrl={this.setUrl}/>
            </Segment>
          </Grid.Column>
        </Grid>

      </div>
    );
  }
}

export default VideoPlayerMain;