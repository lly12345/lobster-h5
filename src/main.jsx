import React from 'react'
import ReactDOM from 'react-dom'
// import {} from 'react-router-dom'
import App from './App'
import './styles/base.less'

console.log(window.screen.height);
// alert(window.screen.height)

ReactDOM.render(
  // <React.StrictMode>
    <App />,
  // </React.StrictMode>,
  document.getElementById('root')
)
