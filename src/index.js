/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import cities from './reducers'
import App from './components/App'
import { addCity } from './actions'

let store = createStore(cities)// Log the initial state
const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)
store.dispatch(addCity('Bhopal'))
store.dispatch(addCity('Indore'))
store.dispatch(addCity('Sironj'))
console.log(store.getState())
unsubscribe()

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)