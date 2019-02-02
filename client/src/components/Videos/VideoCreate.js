import React, {Component} from 'react';
// import history from '../../history';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {createVideo} from "../../actions";
import {Button, Input, Form, Header, Segment, Image, Grid, Icon} from "semantic-ui-react";

import {bounce, fadeIn, flash, zoomIn, bounceInRight} from 'react-animations';
import Radium, {StyleRoot} from 'radium';

const styles = {
  bounce: {
    animation: 'x 2s',
    animationName: Radium.keyframes(bounce, 'bounce')
  },
  fadeIn: {
    animation: 'x 2s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn')
  },
  flash: {
    animation: 'x 4s',
    animationName: Radium.keyframes(flash, 'flash')
  },
  zoomIn: {
    animation: 'x 2s',
    animationName: Radium.keyframes(zoomIn, 'zoomIn')
  },
  bounceInRight: {
    animation: 'x 2s',
    animationName: Radium.keyframes(bounceInRight, 'bounceInRight')
  }
}


class VideoEdit extends Component {

  state = {
    title: '',
    description: '',
    imgUrl: '/assets/default.jpg',
    url: '',
    note: '',
    userId: '',
    errors: []
  }

  componentDidMount() {

  }

  onChange = (e, {name, value}) => {
    this.setState({[name]: value})
  }

  onSubmit = (e ) => {
    e.preventDefault();
    const {title, description, imgUrl, url, note} = this.state;
    const formValue = {title, description, imgUrl, url, note};
    this.props.createVideo(formValue);
  }

  isFormValid = () => {
    const {title, description, imgUrl, url, note} = this.state;
    return ( title && description && imgUrl && url && note)
  }


  renderContent = () => {

    const {title, description, imgUrl, url, note} = this.state;

    return (
      <div className={"ui container"} style={{marginTop:"30px"}}>
        <Segment>
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
                placeholder={"Image URL"}
                name={"imgUrl"}
                value={imgUrl}/>
            </Form.Field>
            <Form.Field>
              <Input
                onChange={this.onChange}
                label={"Video  URL"}
                placeholder={"Video URL"}
                name={"url"}
                value={url}
              />
            </Form.Field>
            <Form.Field>
              <Input
                onChange={this.onChange}
                label={"Note"}
                placeholder={"Your note here"}
                name={"note"}
                value={note}
              />
            </Form.Field>
            <Button color="blue" type={"submit"} disabled={!this.isFormValid()}>Save</Button>
            {/*<Button color="red" type={"submit"}>Cancel</Button>*/}
            <Link to="/videos" className={"ui button red"}>Cancel</Link>
          </Form>
        </Segment>
      </div>
    )
  }

  render() {
    return (
      <div style={{marginTop:"50px"}}>
        <StyleRoot>
          <div  style={styles.bounce}>
            <Header as={"h2"} color={"grey"}>
              <Image src={"/assets/Video-Icon.png"}/>You can add your video here.
            </Header>
          </div>
        </StyleRoot>
        <Header as={"h3"}>Supported sources from </Header>
          <Icon size="big" name={"youtube"}/>
          <Icon size="big" name={"facebook"}/>
          <Icon size="big" name={"soundcloud"}/>
          <Icon size="big" name={"vimeo"}/>
        <Icon size="big" name={"twitch"}/>
        <Icon size="big" name={"mixcloud"}/>
        {this.renderContent()}
        <Header as={"h3"}>Sample Video Links</Header>
        <div className={"ui container"}>
          <Segment>
            <Grid>
              <Grid.Row>
              <Grid.Column width={"8"}>
                <Header as='h4'>
                  <Icon name='youtube' />
                  <Header.Content>
                    YouTube
                    <Header.Subheader>Brief History of Royal Family</Header.Subheader>
                    <Header.Subheader>https://www.youtube.com/watch?v=jNgP6d9HraI</Header.Subheader>
                  </Header.Content>
                </Header>
                <Header as='h4'>
                  <Icon name='soundcloud' />
                  <Header.Content>
                    SoundCloud
                    <Header.Subheader>Miami Nights 1984, Accelerated</Header.Subheader>
                    <Header.Subheader>https://soundcloud.com/miami-nights-1984/accelerated</Header.Subheader>
                  </Header.Content>
                </Header>
                <Header as='h4'>
                  <Icon name='facebook' />
                  <Header.Content>
                    Facebook
                    <Header.Subheader>How to share with just friends</Header.Subheader>
                    <Header.Subheader>https://www.facebook.com/facebook/videos/10153231379946729/</Header.Subheader>
                  </Header.Content>
                </Header>
              </Grid.Column>
              <Grid.Column width={"8"}>

                <Header as='h4'>
                  <Icon name='vimeo' />
                  <Header.Content>
                    Vimeo
                    <Header.Subheader>Construct GTC Teaser</Header.Subheader>
                    <Header.Subheader>https://vimeo.com/90509568</Header.Subheader>
                  </Header.Content>
                </Header>
                <Header as='h4'>
                  <Icon name='twitch' />
                  <Header.Content>
                    Twitch
                    <Header.Subheader>Introducing AutoMod</Header.Subheader>
                    <Header.Subheader>https://www.twitch.tv/videos/106400740</Header.Subheader>
                  </Header.Content>
                </Header>
                <Header as='h4'>
                  <Icon name='mixcloud' />
                  <Header.Content>
                    Mixcloud
                    <Header.Subheader>Meet the curators</Header.Subheader>
                    <Header.Subheader>https://www.mixcloud.com/mixcloud/meet-the-curators/</Header.Subheader>
                  </Header.Content>
                </Header>
              </Grid.Column>
              </Grid.Row>
            </Grid>



          </Segment>
        </div>
      </div>
    );
  }
}


export default connect(null,{createVideo})(VideoEdit);