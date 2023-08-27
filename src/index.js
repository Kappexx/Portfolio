import React from 'react';
import ReactDOM from 'react-dom/client';
import "./GlobalScss/Reset.scss"

import App from './App';

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import changeRotationState from "./features/Stars/stars-slice"

// Store -> Globalized State
const store = configureStore({
  reducer: {
    stars: changeRotationState,
  }
})
// Action -> what we want to do

// Reducer -> has responsibiliti on state

// Dispatch -> action is mimtani reduseramde

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Provider store={store}>
      <App />
   </Provider>
    
  
  </React.StrictMode>
);


