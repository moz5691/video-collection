import React, {Component} from 'react';
import {Form,Button,Input} from "semantic-ui-react";
import {connect} from 'react-redux';
import {createVideo} from "../../actions";


class EditForm extends Component {

  // state = {
  //   title: '',
  //   description: '',
  //   imgUrl: '',
  //   url:''
  // }

  // onChange = (e, {name, value}) => {
  //   this.setState({[name]: value})
  // }

  onSubmit = (e ) => {
    e.preventDefault();
    const {videoId} = this.props.selectedVideo.id;
    console.log('videoId', videoId)
    const formValue = {
      title: this.props.selectedVideo.snippet.title,
      description: this.props.selectedVideo.snippet.description,
      imgUrl: this.props.selectedVideo.snippet.thumbnails.default.url,
      url: `https://www.youtube.com/embed/${videoId}`
    }
    this.props.createVideo(formValue)
  }

  render() {

    if (!this.props.selectedVideo){
      return(
        <div>Loading..</div>
      )
    }

    console.log('selectedVideo', this.props.selectedVideo)
    const {title, description, thumbnails} = this.props.selectedVideo.snippet;
    const {videoId} = this.props.selectedVideo.id;
    const url = 'https://www.youtube.com/embed/' + videoId;
    return (

      <Form onSubmit={this.onSubmit}>
        <Form.Field>
          <Input
            onChange={this.onChange}
            label={'Video Title'}
            placeholder={"Title"}
            name={"title"}
            value={title}/>
        </Form.Field>
        <Form.Field>
          <Input
            onChange={this.onChange}
            label={"Description"}
            placeholder={"Description"}
            name={"description"}
            value={description} />
        </Form.Field>
        <Form.Field>
          <Input
            onChange={this.onChange}
            label={"Image  URL"}
            placeholder={"ImgUrl"}
            name={"imgUrl"}
            value={thumbnails.default.url}/>
        </Form.Field>
        <Form.Field>
          <Input
            onChange={this.onChange}
            label={"Video  URL"}
            placeholder={"Url"}
            name={"url"}
            value={url.toString()}
          />
        </Form.Field>
          <Button fluid color="blue" type={"submit"}>Save</Button>
      </Form>
    );
  }
}

const mapStateToProps = (state) => (
  {userId : state.auth.userId}
)

export default connect(mapStateToProps,{createVideo})(EditForm);