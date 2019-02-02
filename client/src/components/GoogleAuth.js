import React, {Component} from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from "../actions";
import {Button} from 'semantic-ui-react';

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;

class GoogleAuth extends Component {


  componentDidMount() {

    window.gapi.load('client:auth2', async ()=>{
        await window.gapi.client.init({
          clientId: CLIENT_ID,
          scope: 'email'});
        this.auth = window.gapi.auth2.getAuthInstance();
        // this.auth.disconnect();
        // this.auth.isSignedIn.get() is the method to check if user is signed in/out.
        // console.log(this.auth.isSignedIn.get());
        // this.setState({isSignedIn: this.auth.isSignedIn.get()})
        this.authChange(this.auth.isSignedIn.get());
        this.auth.isSignedIn.listen(this.authChange);
        //console.log(this.authChange)
      }
    )
  }

  authChange = (isSigned) => {
    console.log(isSigned);
    if(isSigned){
      this.props.signIn(this.auth.currentUser.get().getId())
      console.log('currentUser', this.auth.currentUser.get().w3.ig);
    } else {
      this.props.signOut()
    }
  }

  onClickSignIn = () => {
    this.auth.signIn();
  }

  onClickSignOut = () => {
    this.auth.signOut();
  }

  signInStatus = () => {
    if (this.props.isSignedIn === null )
      return <Button>Null</Button>;
    else if (this.props.isSignedIn === true )
      return <Button onClick={this.onClickSignOut} color={"red"}>Sign Out</Button>
    else
      return <Button onClick={this.onClickSignIn} color={"green"}>Sign In</Button>
  }


  render() {
    return (
      <div>
        {this.props.isSignedIn && <span style={{marginRight:"10px", color:"green"}}>{this.auth.currentUser.get().w3.ig}</span> }
        {this.signInStatus()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isSignedIn : state.auth.isSignedIn
})

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);