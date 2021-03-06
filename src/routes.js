import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// components
import Layout from './components/hoc/Layout/layout'
import Home from './components/Home/home';
import NewsArticle from './components/Articles/News/Post/index';
import VideoArticle from './components/Articles/Videos/video/index';
import VideosMain from './components/Articles/Videos/Main/index';
import NewsMain from './components/Articles/News/Main/index';

class Routes extends Component {

  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/news" component={NewsMain} />
            <Route exact path="/articles/:id" component={NewsArticle} />
            <Route exact path="/videos" component={VideosMain} />
            <Route exact path="/videos/:id" component={VideoArticle} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default Routes;