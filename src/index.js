import React from 'react';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
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
import SalaryLoan from './pages/salaryLoan';
import MicroLending from './pages/microLending';
import CreditCard from './pages/creditCard';
import PersonalCC from './pages/personalCC';
import Merchant from './pages/merchant';
import QuickCredit from './pages/quickCred';
import Bills from './pages/bills';
import Wallets from './pages/wallet';
import DownloadHargon from './pages/download';
import Login from './adminPages/login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/grabhargon" element={<DownloadHargon/>}></Route>
      <Route path="/personal" element={<Personal/>}></Route>
      <Route path="/business" element={<Business/>}></Route>
      <Route path="/business/loan-agency" element={<LoanAgency/>}></Route>
      <Route path="/business/merchant" element={<Merchant/>}></Route>
      <Route path="/business/business-loan" element={<BusinessLoan/>}></Route>
      <Route path="/business/salary-loan" element={<SalaryLoan/>}></Route>
      <Route path="/business/micro-lending" element={<MicroLending/>}></Route>
      <Route path="/business/credit-card" element={<CreditCard/>}></Route>
      <Route path="/personal/educational-loan" element={<EducationalLoan/>}></Route>
      <Route path="/personal/salary-advance" element={<SalaryAdvance/>}></Route>
      <Route path="/personal/market-place" element={<MarketPlace/>}></Route>
      <Route path="/personal/savings" element={<FixedDepo/>}></Route>
      <Route path="/personal/quickcredit" element={<QuickCredit/>}></Route>
      <Route path="/personal/mortgage" element={<Mortgage/>}></Route>
      <Route path="/personal/tourism" element={<Tourism/>}></Route>
      <Route path="/personal/pawn" element={<Pawn/>}></Route>
      <Route path="/personal/community-loans" element={<ComLoan/>}></Route>
      <Route path="/personal/auto-loan" element={<AutoLoans/>}></Route>
      <Route path="/personal/credit-card" element={<PersonalCC/>}></Route>
      <Route path="/personal/bills" element={<Bills/>}></Route>
      <Route path="/wallet" element={<Wallets/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
