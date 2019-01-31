import React, { Component } from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import './App.css';
import SearchMain from './Search/SearchMain';
import VideoPlayerMain from './Player/VideoPlayerMain';
import VideoCreate from './Videos/VideoCreate';
import VideoEdit from './Videos/VideoEdit';
import VideoDelete from './Videos/VideoDelete';
import Page404 from './Page404';
import Header from './Header';
import GoogleAuth from './GoogleAuth';
import Home from './Home';
import history from '../history';
import PrivateRoute from '../routes/PrivateRoute';
import PublicRoute from '../routes/PublicRoute';

class App extends Component {
  render() {
    return (
      <div className={"App"}>

        <Router history={history}>
          <div>
            <Header/>
            <Switch>
              <PublicRoute exact path={"/"} component={Home}/>
              <PrivateRoute exact path={"/videos"} component={VideoPlayerMain}/>
              <PrivateRoute exact path={"/videos/search"} component={SearchMain}/>
              <PrivateRoute path={"/videos/new"} component={VideoCreate}/>
              <PrivateRoute path={"/videos/edit/:id"} component={VideoEdit}/>
              <PrivateRoute path={"/videos/delete/:id"} component={VideoDelete}/>
              <Route component={Page404}/>
            </Switch>
          </div>

        </Router>

      </div>



    )
  }
}

export default App;
