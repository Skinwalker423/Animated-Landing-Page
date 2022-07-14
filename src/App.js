import React  from 'react';
import { Routes, Route  } from 'react-router-dom';
import Home from './pages/Home/Home';
import Layout from './components/Layout';
import Practice from './pages/practice/practice-tutorials';
import { ThemeProvider } from './context/ThemeContex';

import './App.scss';



function App() {

  

  return (
    <ThemeProvider>
      <div>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='practice' element={<Practice />} />
          </Route>
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
