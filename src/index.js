import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NewVideo from './pages/New/Video';
import NewCategory from './pages/New/Category';

ReactDOM.render(
  <BrowserRouter>
    <Switch>

    <Route path="/" exact component={Home} />
    <Route path="/new/video"  component={NewVideo} />
    <Route path="/new/category"  component={NewCategory} />
    <Route component={()=> (<div>Página 404</div>)} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
