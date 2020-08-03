import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';

import NewVideo from './pages/New/Video';
import NewCategory from './pages/New/Category';
import NotFound from './pages/NotFound';

ReactDOM.render(
  <BrowserRouter>
    <Switch>

      <Route path="/" exact component={Home} />
      <Route path="/new/video" component={NewVideo} />
      <Route path="/new/category" component={NewCategory} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
