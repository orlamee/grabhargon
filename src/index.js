import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import './App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Personal from './pages/personal';
import Business from './pages/business';
import EducationalLoan from './pages/educationalLoan';
import SalaryAdvance from './pages/salary';
import MarketPlace from './pages/marketPlace';
import FixedDepo from './pages/fixedDeposit';
import Mortgage from './pages/mortgage';
import Tourism from './pages/tourism';
import Pawn from './pages/pawn';
import ComLoan from './pages/comLoan';
import AutoLoans from './pages/autoLoan';
import LoanAgency from './pages/loanAgency';
import BusinessLoan from './pages/businessLoan';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/personal" element={<Personal/>}></Route>
      <Route path="/business" element={<Business/>}></Route>
      <Route path="/business/loan-agency" element={<LoanAgency/>}></Route>
      <Route path="/business/business-loan" element={<BusinessLoan/>}></Route>
      <Route path="/personal/educational-loan" element={<EducationalLoan/>}></Route>
      <Route path="/personal/salary-advance" element={<SalaryAdvance/>}></Route>
      <Route path="/personal/market-place" element={<MarketPlace/>}></Route>
      <Route path="/personal/fixed-deposit" element={<FixedDepo/>}></Route>
      <Route path="/personal/mortgage" element={<Mortgage/>}></Route>
      <Route path="/personal/tourism" element={<Tourism/>}></Route>
      <Route path="/personal/pawn" element={<Pawn/>}></Route>
      <Route path="/personal/community-loans" element={<ComLoan/>}></Route>
      <Route path="/personal/auto-loan" element={<AutoLoans/>}></Route>
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
