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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/personal" element={<Personal/>}></Route>
      <Route path="/business" element={<Business/>}></Route>
      <Route path="/educational-loan" element={<EducationalLoan/>}></Route>
      <Route path="/salary-advance" element={<SalaryAdvance/>}></Route>
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
