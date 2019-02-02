import React, {Component} from 'react';
import {Button, Divider, Input, Table, Checkbox, Progress} from 'semantic-ui-react';
// import {connect} from 'react-redux';
import {findDOMNode} from 'react-dom'
// import {fetchStream} from "../../actions";
import ReactPlayer from 'react-player';
import screenfull from 'screenfull';


class VideoPlayer extends Component {

  constructor(props){
    super(props);
    this.state = {
      url: null,
      pip: false,
      playing: true,
      volume: 0.8,
      muted: false,
      played: 0,
      loaded: 0,
      duration: 0,
      playbackRate: 1.0,
      loop: false
    }

    this.ref = (player) => {
      this.player = player
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    // console.log("prevState", prevState);
    // console.log('nextProps', nextProps);
    // don't know why.. following cause video cannot play.;
    // if(nextProps) {
    //   return null;
    // }
    if(nextProps.url !== prevState.url){
     return ({url: nextProps.url});
    }
    return null;
  }

  load = (url) => {
    this.setState({url, played:0, loaded:0, pip: false});
  }

  playPause = () => {
    this.setState({playing: !this.state.playing})
  }

  pip = () => {
    this.setState({pip: !this.state.pip})
  }

  stop = () => {
    this.setState({url: null, playing: false})
  }

  setVolume = (e) => {
    this.setState({volume: parseFloat(e.target.value)})
  }

  toggleMuted = () => {
    this.setState({muted: !this.state.muted});
  }

  toggleLoop = () => {
    this.setState({loop: !this.state.loop})
  }

  setPlaybackRate = (e) => {
    this.setState({playbackRate: parseFloat(e.target.value)});
  }

  onPlay = () => {
    // console.log('onPlay');
    this.setState({playing: true})
  }

  onPause = () => {
    // console.log('onPause');
    this.setState({playing: false})
  }

  onEnablePIP = () => {
    // console.log('onEnablePIP');
    this.setState({pip: true});
  }

  onDisablePIP = () => {
    // console.log('onDisablePIP');
    this.setState({pip: false});
  }

  onSeekMouseDown = (e) => {
    this.setState({seeking: true})
  }

  onSeekMouseUp = (e) => {
    this.setState({seeking: false})
    this.player.seekTo(parseFloat(e.target.value))
  }

  onSeekChange = (e) => {
    this.setState({played: parseFloat(e.target.value)})
  }

  onProgress = (state) => {

    if(!this.state.seeking){
      // console.log('onProgress', state);
      const loaded = state.loaded || 0;
      const played = state.played || 0;
      this.setState({loaded, played})
    }
  }

  onEnded = () => {
    // console.log('onEnded');
    this.setState({playing: this.state.loop})
  }

  onDuration = (duration) => {
    // console.log('onDuration', duration);
    this.setState({duration})
  }

  onClickFullscreen = () => {
    screenfull.request(findDOMNode(this.player))
  }

  renderLoadButton = (url, label) => {
    return(
      <button onClick={()=>this.load(url)}>{label}</button>
    )
  }



  render() {
    const {url, playing, volume, muted, loop,
      played, loaded, duration, playbackRate, pip} = this.state
    return (
      <div>
        <div style={{"borderStyle":"solid", "borderWidth": "2px"}}>

          <ReactPlayer
            ref={this.ref}
            width="100%"
            url={url}
            pip={pip}
            playing={playing}
            loop={loop}
            playbackRate={playbackRate}
            volume={volume}
            muted={muted}
            onReady={()=>console.log('onReady')}
            onStart={()=>console.log('onStart')}
            onPlay={this.onPlay}
            onEnablePIP={this.onEnablePIP}
            onDisablePIP={this.onDisablePIP}
            onPause={this.onPause}
            onBuffer={()=>console.log('onBuffer')}
            onSeek={(e)=>console.log('onSeek', e)}
            onEnded={this.onEnded}
            onError={e=>console.log('onError',e)}
            onProgress={this.onProgress}
            onDuration={this.onDuration}
          />
        </div>

        <Divider/>
        <Table size={"small"}>
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <Button onClick={this.stop} size={"small"}>Stop</Button>
              </Table.Cell>
              <Table.Cell>
                <Button onClick={this.playPause} size={"small"}>{playing ? 'Pause':'Play'}</Button>
              </Table.Cell>
              <Table.Cell>
                <Button onClick={this.onClickFullscreen} size={"small"}>Fullscreen</Button>
              </Table.Cell>
              <Table.Cell>
                {ReactPlayer.canEnablePIP(url)&&
                <Button onClick={this.pip} size={"small"}>{pip ? 'Disable PIP' : 'Enable PIP'}</Button>
                }
              </Table.Cell>
              <Table.Cell>
                <Button onClick={this.setPlaybackRate} value={1} size={"small"}>1x</Button>
              </Table.Cell>
              <Table.Cell>
                <Button onClick={this.setPlaybackRate} value={1.5} size={"small"}>1.5x</Button>
              </Table.Cell>
              <Table.Cell>
                <Button onClick={this.setPlaybackRate} value={2} size={"small"}>2x</Button>
              </Table.Cell>

            </Table.Row>

          </Table.Body>

        </Table>

        <Table>
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <Input
                  size={"small"}
                  type='range' min={0} max={1} step='any'
                  value={played}
                  label={"Seek"}
                  onMouseDown={this.onSeekMouseDown}
                  onChange={this.onSeekChange}
                  onMouseUp={this.onSeekMouseUp}
                />
              </Table.Cell>


              <Table.Cell>
                <Checkbox label={"loop"} type='checkbox' checked={loop} onChange={this.toggleLoop}/>
              </Table.Cell>

            </Table.Row>
          </Table.Body>
        </Table>

        <Table>
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <Input
                  size={"small"}
                  type='range' min={0} max={1} step='any'
                  value={volume}
                  label={"Volume"}
                  onChange={this.setVolume}
                />
              </Table.Cell>
              <Table.Cell>
                <Checkbox label={"mute"} type='checkbox' checked={muted} onChange={this.toggleMuted}/>
              </Table.Cell>

            </Table.Row>
          </Table.Body>
        </Table>

        <Progress max={100} percent={played * 100} indicating>Played</Progress>

        <Progress max={100} percent={loaded * 100} indicating>Loaded</Progress>

        <Table celled inverted selectable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Type</Table.HeaderCell>
              <Table.HeaderCell>Status</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>URL</Table.Cell>
              <Table.Cell><p>{(url instanceof Array ? 'Multiple' : url) || null}</p></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Is Playing</Table.Cell>
              <Table.Cell><p>{playing ? 'true': 'false'}</p></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Volume Level</Table.Cell>
              <Table.Cell><p>{volume.toFixed(2)*100}%</p></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Played</Table.Cell>
              <Table.Cell><p>{played.toFixed(2)*100}%</p></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Loaded</Table.Cell>
              <Table.Cell><p>{loaded.toFixed(2)*100}%</p></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Duration</Table.Cell>
              <Table.Cell><p>{duration} seconds</p></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Elapsed</Table.Cell>
              <Table.Cell><p>{(duration * played).toFixed(2)} seconds</p></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Remaining</Table.Cell>
              <Table.Cell><p>{(duration * (1-played)).toFixed(2)} seconds</p></Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>

      </div>

    );
  }
}

export default VideoPlayer;