import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';
// import Header from "./PrivateRoute";

const PublicRoute =(props)=> {

  const {isSignedIn, component:Component, ...rest} = props;

    return (
      <Route
        {...rest} component={(props)=>(
          isSignedIn ?
          (<Redirect to={"/videos"}/>):
          <div>
            <Component {...props}/>
          </div>)}
      />

    );
}

const mapStateToProps =(state)=>({
  isSignedIn : !!state.auth.isSignedIn
})

export default connect(mapStateToProps, null)(PublicRoute);