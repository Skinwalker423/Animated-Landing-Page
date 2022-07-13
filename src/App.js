import React from 'react';
import { Routes, Route  } from 'react-router-dom';
import Home from './pages/Home/Home';
import Layout from './components/Layout';
import Practice from './pages/practice/practice-tutorials';

import './App.scss';



function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='practice' element={<Practice />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
