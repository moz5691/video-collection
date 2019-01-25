import React, {Component} from 'react';
import Modals from '../Modals';
import history from '../../history';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {deleteVideo, fetchVideo} from "../../actions";

class VideoDelete extends Component {

  componentDidMount() {
    console.log(this.props.match.params.id)
    this.props.fetchVideo(this.props.match.params.id);
  }

  renderActions = () => {
    return (
      <React.Fragment>
        <button onClick={()=>this.props.deleteVideo(this.props.match.params.id)} className={"ui button negative"}>Delete</button>

        <Link to="/videos" className={"ui button"}>Cancel</Link>
      </React.Fragment>
    )
  }

  renderContent = () => {
    if(!this.props.video) {
      return (
        'Are you sure to delete this title?'
      )
    }
    return (
      `Are you sure to delete ${this.props.video.title}`
    )

  }

  render() {
    return (
      <Modals
        title={"Delete Item"}
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={()=>history.push('/videos')}
      />
    );
  }
}

const mapStateToProps = (state, ownProps)=>(
  {
    video: state.videos[ownProps.match.params.id]
  }
)

export default connect(mapStateToProps,{fetchVideo, deleteVideo})(VideoDelete);