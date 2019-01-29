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
import history from '../history';

class App extends Component {
  render() {
    return (
      <div className={"App"}>

        <Router history={history}>
          <div>
            <Header/>
            <Switch>
              {/*<Route exact path={"/"} component={GoogleAuth}/>*/}
              <Route exact path={"/videos/search"} component={SearchMain}/>
              <Route path={"/videos/new"} component={VideoCreate}/>
              <Route path={"/videos/edit/:id"} component={VideoEdit}/>
              <Route path={"/videos/delete/:id"} component={VideoDelete}/>
              <Route exact path={"/videos"} component={VideoPlayerMain}/>
              <Route component={Page404}/>
            </Switch>
          </div>

        </Router>

      </div>



    )
  }
}

export default App;
