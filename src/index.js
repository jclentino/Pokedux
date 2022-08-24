import React from 'react';
import { pokemonsReducer } from './reducers/pokemons';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import { logger } from './middlewares';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const composeEnhancers = compose(
  applyMiddleware(logger)
)

const store = createStore(
    pokemonsReducer,
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
