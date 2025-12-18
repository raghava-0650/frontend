import './App.css';

import React from 'react';

import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';

import Landing from './pages/Landing';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path = '/' element = {<Landing />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App