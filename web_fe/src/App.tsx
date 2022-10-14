import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import BenefitList from './Pages/Dashboard/BenefitList/BenefitList';
import DashboardPage from './Pages/Dashboard/DashboardPage';
import MostBenfits from './Pages/Dashboard/MostBenefit/MostBenefits';
import Userinfo from './Pages/Dashboard/UserInfo/UserInfo';
import MainPage from './Pages/Main/MainPage';
import NotFoundPage from './Pages/NotFound/NotFoundPage';

function App() {
  return (
    <div className="mx-auto overflow-hidden" id="App">
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<MainPage />} />

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
