import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css';

import HomePage from './pages/HomePage.js'
import './global.css';

const container = document.getElementById('app')
ReactDOM.render(<HomePage />, container)
