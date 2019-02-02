import React from 'react';
import {Grid, Segment, Header, Icon, Image} from "semantic-ui-react";
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

const Home = (props) => {
  return (

    <div>
    <Grid style={{marginTop:'50px'}} stackable>
      <Grid.Row>
        <Grid.Column >
          <StyleRoot>
            <div  style={styles.zoomIn}>
              <Header as={"h1"} color={"grey"}>
                <Image src={"/assets/video-player.png"}/>Video Collection App
              </Header>
            </div>
          </StyleRoot>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row >

        <Grid.Column width={8} relaxed={"true"}>
          <Segment style={{marginLeft: '50px', marginBottom: '3px'}}>
          <div style={{margin:"8px", textAlign:"center"}}>
            <iframe width="400" height="250"
  src="https://www.youtube.com/embed/ByXuk9QqQkk" frameBorder="0"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen/>

          </div>
          </Segment>
        </Grid.Column>

        <Grid.Column width={8}>
          <Segment style={{marginRight: '50px', marginBottom: '0px'}}>
            <StyleRoot>
              <div style={{marginLeft:"20px"}}>
                <div style={styles.bounceInRight}>
                  <Header color="orange" as={"h2"}>Organize your videos in one place. </Header>
                </div>
              <Header color="grey" as={"h4"} icon={"search"} content={"Search, Find videos from Youtube"}/>
              <Header color="grey" as={"h4"} icon={"save outline"} content={"Save, Save videos found"}/>
              <Header color="grey" as={"h4"} icon={"youtube play"} content={"Play, From saved videos"}/>
              <Header color="grey" as={"h4"} icon={"sticky note outline"} content={"Add, Notes to saved videos"}/>
              <Header color="grey" as={"h4"} icon={"file video outline"} content={"One place, Organize your videos"}/>
              </div>
            </StyleRoot>
          </Segment>
        </Grid.Column>

      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={16}>
          <Segment style={{margin:"50px"}}>
            <Header as={"h5"} icon={"copyright"} content={"by Chan Ho Ahn"} textAlign={"center"}/>
            <p>Background Image: <a href="http://www.freepik.com">Designed by rawpixel.com / Freepik</a></p>
            <p>YouTube video search performed is through YouTube APIs and Google.  All copyrights are reserved by YouTube and/or its creators.</p>

          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    </div>
  );
}

export default Home;