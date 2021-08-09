import logo from './logo.svg';
import './App.css';
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Layout from './components/Layout'
function App() {

  return (
    <Router basename="/tdraper.dev">
      <Layout />
    </Router>
  )
}

export default App;
