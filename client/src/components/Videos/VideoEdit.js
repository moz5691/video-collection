import React, {Component} from 'react';
import history from '../../history';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {editVideo, fetchVideo} from "../../actions";

class VideoEdit extends Component {

  componentDidMount() {
    console.log(this.props.match.params.id)
    this.props.fetchVideo(this.props.match.params.id);
  }


  renderContent = () => {
    if(!this.props.video) {
      return (
        <div> <p>On loading....</p> </div>
      )
    }
    return (
      <div>{this.props.video.title}</div>
    )
  }

  render() {
    return (
      <div>

      {this.renderContent()}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps)=>(
  {
    video: state.videos[ownProps.match.params.id]
  }
)

export default connect(mapStateToProps,{fetchVideo, editVideo})(VideoEdit);