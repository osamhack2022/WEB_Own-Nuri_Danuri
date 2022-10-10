import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './stylesheets/Head.css';

// Page Import
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import NotFoundPage from './pages/NotFoundPage';

// Component Import
import Userinfo from './components/UserInfo';
import MostBenfits from './components/MostBenefits';
import BenefitList from './components/BenefitList';
import Community from './components/Community';
import Hosting from './components/Hosting';

function App() {
  return (
    <div className="mx-auto h-fit" id="App">
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<MainPage />} />
          <Route path="login" element={<LoginPage />} />

          <Route path="dashboard" element={<DashboardPage />}>
            <Route path="userinfo" element={<Userinfo />} />
            <Route path="mostbenefits" element={<MostBenfits />} />
            <Route path="benefitlist" element={<BenefitList />} />
            <Route path="community" element={<Community />} />
            <Route path="hosting" element={<Hosting />} />
          </Route>

          <Route path="/*" element={<NotFoundPage />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
