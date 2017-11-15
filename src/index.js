import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import promise from 'redux-promise';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import logger from 'redux-logger'
import reducers from './reducers';
import NavigationBar from './components/navigation-bar';
import Chat from './components/chat';
import ChatItem from './components/chat-list-item';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
  applyMiddleware(thunkMiddleware, promise, logger)
));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <NavigationBar />
        <Switch>
          { /* <Route exact={true} path="/posts/new" component={PostNew} /> */}
          <Chat />
          <ChatItem message="AAAAAAA"/>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
