import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login_page from './pages/Login_page';
// import './App.css';


import Main_page from './pages/Main_page';
import NotFound_page from './pages/NotFound_page';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Main_page />}/>
          <Route path="/login" element={<Login_page />}/>

          <Route path="/*" element={<NotFound_page />}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
