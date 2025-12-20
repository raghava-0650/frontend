import './App.css';

import React from 'react';

import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';

import Authentication from './pages/Authentication';
import Landing from './pages/Landing';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path = '/' element = {<Landing />}></Route>
          <Route path = '/auth' element = {<Authentication />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App