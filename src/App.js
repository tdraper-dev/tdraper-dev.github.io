import logo from './logo.svg';
import './App.css';
import React from 'react'
import { HashRouter as Router } from 'react-router-dom'
import Layout from './components/Layout'
function App() {

  return (
    <Router>
      <Layout />
    </Router>
  )
}

export default App;
