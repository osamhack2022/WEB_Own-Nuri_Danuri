import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import './App.css';


import Main_page from './pages/Main_page';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Main_page />}/>

          <Route path="/&" element={<NotFound_page />}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
