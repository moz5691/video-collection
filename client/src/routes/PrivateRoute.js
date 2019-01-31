import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from "react-router-dom";

const PrivateRoute =(props) => {

  const {isSignedIn, component:Component, ...rest} = props;

    return (
      <Route
        {...rest}
        component={(props)=>isSignedIn ?
          (<div>
            <Component {...props}/>
          </div>) :
          (<Redirect to={"/"}/>)}
      />

    );

}

const mapStateToProps = (state) => ({
  isSignedIn : !!state.auth.isSignedIn
})

export default connect(mapStateToProps, null)(PrivateRoute);