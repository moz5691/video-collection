import React, {Component} from 'react';
import history from '../../history';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {editVideo, fetchVideo} from "../../actions";
import {Button, Input, Form, Header, Segment, Image, Grid} from "semantic-ui-react";

class VideoEdit extends Component {

  state = {
    title: '',
    description: '',
    imgUrl: '',
    url: ''
  }

  componentDidMount() {
    console.log(this.props.match.params.id)
    this.props.fetchVideo(this.props.match.params.id);
  }

  onChange = (e, {name, value}) => {
    this.setState({[name]: value})
  }

  onSubmit = (e ) => {
    e.preventDefault();
    // const formValue = {
    //   title: this.props.selectedVideo.snippet.title,
    //   description: this.props.selectedVideo.snippet.description,
    //   imgUrl: this.props.selectedVideo.snippet.thumbnails.default.url,
    //   url: `https://www.youtube.com/embed/${videoId}`
    // }
    // this.props.editVideo(formValue)
  }



  renderContent = () => {
    if(!this.props.video) {
      return (
        <div> <p>On loading....</p> </div>
      )
    }

    console.log('edit', this.props.video);
    const {title, description, imgUrl, url} = this.state;

    return (



     <div className={"ui container"}>

       <Segment>
         <Grid>
           <Grid.Column width={"5"}>
             <Image src={this.props.video.imgUrl}/>
           </Grid.Column>
           <Grid.Column width={"11"}>
             <Header as={"h2"}>{this.props.video.title}</Header>
             <Header as={"h4"}>{this.props.video.description}</Header>
             <Header as={"h4"}>{this.props.video.url}</Header>
             <Header as={"h4"}>{this.props.video.imgUrl}</Header>
           </Grid.Column>
         </Grid>



       </Segment>

       <Segment>
         <Form onSubmit={this.onSubmit}>
           <Form.Field>

             <Input
               onChange={this.onChange}
               label={'Video Title'}
               placeholder={this.props.video.title}
               name={"title"}
               value={title}/>

           </Form.Field>
           <Form.Field>
             <Input
               onChange={this.onChange}
               label={"Description"}
               placeholder={this.props.video.description}
               name={"description"}
               value={description} />
           </Form.Field>
           <Form.Field>
             <Input
               onChange={this.onChange}
               label={"Image  URL"}
               placeholder={this.props.video.imgUrl}
               name={"imgUrl"}
               value={imgUrl}/>
           </Form.Field>
           <Form.Field>
             <Input
               onChange={this.onChange}
               label={"Video  URL"}
               placeholder={this.props.video.url}
               name={"url"}
               value={url}
             />
           </Form.Field>
           <Button color="blue" type={"submit"}>Save</Button>
           <Button color="red" type={"submit"}>Cancel</Button>
         </Form>
       </Segment>




     </div>


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