import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setSelected, setVideos} from "../../actions";
import _ from 'lodash';
import {Grid, Segment} from 'semantic-ui-react';
import YTSearch from 'youtube-api-search'
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetails';
import VideoList from "./VideoList";
import EditForm from "./EditForm";

// const API_KEY = process.env.REACT_APP_API_KEY;

class SearchMain extends Component {

  constructor(props){
    super(props);
    this.videoSearch('totoro');
  }

  videoSearch = (term) => {
    YTSearch({ key: process.env.REACT_APP_API_KEY, term: term }, videos => {
      // this.setState({ videos: videos, selectedVideo: videos[0] });

      this.props.setSelected(videos[0]);
      this.props.setVideos(videos);

     // console.log('videos', videos)
    });

  }


  render() {
    const videoSearch = _.debounce(term => {this.videoSearch(term); }, 300);
    return (
      < div className={"ui container"}>
        <Grid stackable padded>
          <Grid.Column width={11}>
            <SearchBar onInputChange={videoSearch}/>
            <VideoDetail video = {this.props.selectedVideo}/>
            <Segment>
            <EditForm selectedVideo = {this.props.selectedVideo} />
            </Segment>
          </Grid.Column>
          <Grid.Column width={5}>
            <VideoList
              videos = {this.props.videos}
            />
          </Grid.Column>
        </Grid>
      </div>
  )
    ;
  }
}

const mapStateToProps = (state) => ({
  selectedVideo : state.search.selectedVideo,
  videos : state.search.videos
})

export default connect(mapStateToProps, {setSelected, setVideos})(SearchMain);