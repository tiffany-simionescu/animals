import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

// Components
import FoxImage from './components/FoxImage';
import DogImage from './components/DogImage';
import CatImage from './components/CatImage';
import Nav from './components/Nav';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';

// Reducers
import { reducer } from './reducers';

// Middleware
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// Redux Store
import { createStore, applyMiddleware } from 'redux';

export const store = createStore(reducer, applyMiddleware(thunk, logger));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <Switch>
          <PrivateRoute exact path="/fox-image" component={FoxImage} />
          <PrivateRoute exact path="/dog-image" component={DogImage} />
          <PrivateRoute exact path="/cat-image" component={CatImage} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
