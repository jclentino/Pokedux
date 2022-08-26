import React from 'react';
import rootReducer from './reducers/rootReducer';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import { logger } from './middlewares';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose

const composeEnhancers = composeAlt(
  applyMiddleware(thunk, logger)
)

const store = createStore(
    rootReducer,
    composeEnhancers    
  )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
