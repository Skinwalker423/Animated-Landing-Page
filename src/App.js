import React from 'react';
import { Routes, Route  } from 'react-router-dom';
import Home from './routes/Home/Home';
import Layout from './components/Layout';

import './App.scss';



function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
