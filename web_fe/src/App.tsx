import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './stylesheets/total.css';

import Main_page from './pages/Main_page';
import Login_page from './pages/Login_page';

import Dashboard_page from './pages/Dashboard_page';
import Userinfo from './components/UserInfo';
import MostBenfits from './components/MostBenefits';
import BenefitList from './components/BenefitList';
import Community from './components/Community';
import Hosting from './components/Hosting';

import NotFound_page from './pages/NotFound_page';

function App() {
  return (
    <div className="mx-auto h-fit" id="App">
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Main_page />} />
          <Route path="login" element={<Login_page />} />

          <Route path="dashboard" element={<Dashboard_page />}>
            <Route path="userinfo" element={<Userinfo />} />
            <Route path="mostbenefits" element={<MostBenfits />} />
            <Route path="benefitlist" element={<BenefitList />} />
            <Route path="community" element={<Community />} />
            <Route path="hosting" element={<Hosting />} />
          </Route>

          <Route path="/*" element={<NotFound_page />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
