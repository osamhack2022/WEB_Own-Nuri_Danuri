import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Page Import
import MainPage from './Main/MainPage';
import LoginPage from './Login/LoginPage';
import DashboardPage from './Dashboard/DashboardPage';
import NotFoundPage from './NotFound/NotFoundPage';

// Component Import
import Userinfo from './Dashboard/UserInfo/UserInfo';
import MostBenfits from './Dashboard/MostBenefit/MostBenefits';
import BenefitList from './Dashboard/BenefitList/BenefitList';

function App() {
  return (
    <div className="mx-auto overflow-hidden" id="App">
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<MainPage />} />
          <Route path="login" element={<LoginPage />} />

          <Route path="dashboard" element={<DashboardPage />}>
            <Route path="userinfo" element={<Userinfo />} />
            <Route path="mostbenefits" element={<MostBenfits />} />
            <Route path="benefitlist" element={<BenefitList />} />
          </Route>

          <Route path="/*" element={<NotFoundPage />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
