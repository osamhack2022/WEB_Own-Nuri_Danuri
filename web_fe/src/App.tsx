import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Page Import
import MainPage from './Pages/Main/MainPage';
import LoginPage from './Pages/Login/LoginPage';
import DashboardPage from './Pages/Dashboard/DashboardPage';
import NotFoundPage from './Pages/NotFound/NotFoundPage';

// Component Import
import Userinfo from './Pages/Dashboard/UserInfo/UserInfo';
import MostBenfits from './Pages/Dashboard/MostBenefit/MostBenefits';
import BenefitList from './Pages/Dashboard/BenefitList/BenefitList';

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
