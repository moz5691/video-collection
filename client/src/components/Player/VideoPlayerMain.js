import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchVideos} from "../../actions";
import VideoPlayer from './VideoPlayer';
import VideoPlayerList from './VideoPlayerList';
import {Grid, Segment} from 'semantic-ui-react';


class VideoPlayerMain extends Component {

  state = {
    url: null,
    fetching: false
  }

  componentDidMount() {
   this.setState({fetching: true},()=>this.props.fetchVideos() )
   this.setState({fetching: false});
  }




  setUrl=(url)=>{
    console.log('setUrl', url)
    this.setState({url})
  }
  render() {
    const {videos} = this.props;
    const {url, fetching} = this.state;
    return (
      <div >
        <Grid stackable padded>
          <Grid.Column width={10}>
            <Segment>
            <VideoPlayer url={url} />
            </Segment>
          </Grid.Column>
          <Grid.Column width={6}>
            <Segment>
            <VideoPlayerList setUrl={this.setUrl} videos={videos} fetching={fetching} />
            </Segment>
          </Grid.Column>
        </Grid>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  videos : state.videos
})

export default connect(mapStateToProps, {fetchVideos })(VideoPlayerMain);