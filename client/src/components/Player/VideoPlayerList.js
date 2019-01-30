import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchVideos} from "../../actions";
import {Form, Image, Card, Feed, Button} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

class VideoPlayerList extends Component {

  state = {
    urlTerm: ""
  }

  componentDidMount() {
   this.props.fetchVideos();
  }


  onChange=(e)=>{
    this.setState({urlTerm: e.target.value})
  }

  onSubmit=()=>{
    this.props.setUrl(this.state.urlTerm);
  }

  handleSetUrl=(url)=>{
    console.log('url', url)
    this.props.setUrl(url);
  }

  renderVideoList = (videos) => {

    if(!videos){
      return(<div>...Loading</div>);
    }
    // const videos = Object.values(this.props.videos);
    //console.log(videos)

    return(
      Object.keys(videos).map( (key) => {
          console.log('video', key)
          return  (
            <Feed.Event key={key}>
              <Image src={videos[key].imgUrl} onClick={()=>this.handleSetUrl(videos[key].url)}/>
              <Feed.Content style={{"marginLeft":"10px"}}>
                <Feed.Date content={'today'}/>
                <Feed.Summary>
                  <p> {videos[key].title}</p>
                </Feed.Summary>
                <Feed.Extra>
                  {/*<Button as={Link} to={`/videos/edit/${key}`} size="mini" color={"blue"}>Edit</Button>*/}
                  {/*<Button as={Link} to={`/videos/delete/${key}`}  size="mini" color={"orange"}>Delete</Button>*/}
                  <Link to={`/videos/edit/${key}`}> <Button size="mini" color={"blue"}>Edit</Button></Link>
                  <Link to={`/videos/delete/${key}`}><Button  size="mini" color={"orange"}>Delete</Button></Link>
                </Feed.Extra>
              </Feed.Content>

            </Feed.Event>
          )


        }
      )
    )

    // return(
    //   videos.map( (video) => {
    //      // console.log('video', video)
    //       return (
    //           <Feed.Event key={video._id}>
    //             <Image src={video.imgUrl} onClick={()=>this.onClickSetUrl(video.url)}/>
    //             <Feed.Content style={{"marginLeft":"10px"}}>
    //               <Feed.Date content={'today'}/>
    //               <Feed.Summary>
    //                 <p> {video.title}</p>
    //               </Feed.Summary>
    //               <Feed.Extra>
    //                 <Button as={Link} to={`/videos/edit/${video._id}`} size="mini" color={"blue"}>Edit</Button>
    //                 <Button as={Link} to={`/videos/delete/${video._id}`}  size="mini" color={"orange"}>Delete</Button>
    //               </Feed.Extra>
    //             </Feed.Content>
    //
    //           </Feed.Event>
    //       )
    //     }
    //   )
    // )

    //console.log(Object.values(this.props.videos))
  }

  render(){

    const {videos} = this.props;

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
            <Feed size={"small"}>
              {this.renderVideoList(videos)}
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

