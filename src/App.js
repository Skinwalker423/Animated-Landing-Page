import React, {useState} from 'react';
import { Routes, Route  } from 'react-router-dom';
import Home from './pages/Home/Home';
import Layout from './components/Layout';
import Practice from './pages/practice/practice-tutorials';
import { ThemeContext } from './context/ThemeContex';

import './App.scss';



function App() {

  const [darkTheme, setDarkTheme] = useState(false);

    const toggleTheme = () => {
        setDarkTheme(previousDarkTheme => !previousDarkTheme);
    }

    const value = {darkTheme, toggleTheme, setDarkTheme };

  return (
    <ThemeContext.Provider value={value}>
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='practice' element={<Practice />} />
        </Route>
      </Routes>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
