import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchVideos} from "../../actions";
import {Form, Image, Card, Feed, Button} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

class VideoPlayerList extends Component {

  state = {
    urlTerm: null
  }

  componentDidMount() {
    this.props.fetchVideos();
    // console.log('fetch videos')
  }



  onChange=(e)=>{
    this.setState({urlTerm: e.target.value})
  }

  onSubmit=()=>{
    this.props.setUrl(this.state.urlTerm);
  }

  onClickSetUrl=(url)=>{
    console.log('url', url)
    this.props.setUrl(url);
  }

  renderVideoList = () => {

    if(!this.props.videos){
      return null;
    }

    const videos = Object.values(this.props.videos);
    console.log(videos)
    return(
      videos.map( (video) => {
          console.log('video', video)
          return (
              <Feed.Event key={video._id}>
                <Image src={video.imgUrl} onClick={()=>this.onClickSetUrl(video.url)}/>
                <Feed.Content style={{"marginLeft":"10px"}}>
                  <Feed.Date content={'today'}/>
                  <Feed.Summary>
                    <p> {video.title}</p>
                  </Feed.Summary>
                  <Feed.Extra>
                    <Button as={Link} to={`/videos/edit/${video._id}`} size="mini" color={"blue"}>Edit</Button>
                    <Button as={Link} to={`/videos/delete/${video._id}`}  size="mini" color={"orange"}>Delete</Button>
                  </Feed.Extra>
                </Feed.Content>

              </Feed.Event>
          )
        }
      )
    )

    //console.log(Object.values(this.props.videos))
  }

  render(){


    return (
      <div>
        <Form onSubmit={this.onSubmit}>
          <Form.Group>
          <Form.Input
            value={this.state.urlTerm}
            onChange={this.onChange}
            placeholder='video link' />
          <Form.Button content='Submit' />
          </Form.Group>
        </Form>


        <Card fluid>
          <Card.Content>
            <Card.Header>Video List</Card.Header>
          </Card.Content>
          <Card.Content>
            <Feed size={"medium"}>
              {this.renderVideoList()}
            </Feed>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {videos : state.videos}
)

export default connect(mapStateToProps,{fetchVideos})(VideoPlayerList);