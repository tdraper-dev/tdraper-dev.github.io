import logo from './logo.svg';
import './App.css';
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
function App() {

  return (
    <BrowserRouter basename="/draper.dev">
      <Layout />
    </BrowserRouter>
  )
}

export default App;
