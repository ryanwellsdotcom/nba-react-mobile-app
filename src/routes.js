import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// components
import Layout from './components/hoc/Layout/layout'
import Home from './components/Home/home';
import NewsArticle from './components/Articles/News/Post/index';

class Routes extends Component {

  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact patch="/articles?id=:id" component={NewsArticle} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default Routes;