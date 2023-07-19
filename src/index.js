import React from 'react';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
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
import LoginOTP from './adminPages/loginOtp';
import Register from './adminPages/register';
import ForgotP from './adminPages/forgotPassword';
import NewPassword from './adminPages/newPassword';
import Aboutus from './pages/aboutus';
import LPO from './pages/lpo';
import MerchantSignup from './adminPages/merchantSignup';
import SignupOTP from './adminPages/signupOtp';
import ChangeEmail from './adminPages/changeEmail';
import CompanySignup from './adminPages/companySignup';
import AgentSignup from './adminPages/agentSignup';
import Careers from './pages/careers';
import Auction from './pages/auction';
import Error from './pages/error';
import CreditBuilder from './pages/creditBuilder';
import Integration from './pages/integration';
import SavingBusiness from './pages/savingsbusiness';
import Apply from './pages/apply';
import TermsCond from './pages/termsCond';
import PrivacyPolicy from './pages/privacyPolicy';
import Complaints from './pages/Complaints';
import Faqs from './pages/Faqs';
import PressMedia from './pages/pressMedia';
import Blogs from './pages/Blogs';
import Logos from './pages/logos';
import BlogLending from './pages/blogLending';
import Blogsave from './pages/blogsave';
import BlogEli from './pages/blogEli';
import BlogMaximize from './pages/blogMaximize';
import BlogDefault from './pages/blogDefault';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/about-us" element={<Aboutus/>}></Route>
      <Route path="/auction" element={<Auction/>}></Route>
      <Route path="/grabhargon" element={<DownloadHargon/>}></Route>
      <Route path="/personal" element={<Personal/>}></Route>
      <Route path="/integration" element={<Integration/>}></Route>
      <Route path="/credit-builder" element={<CreditBuilder/>}></Route>
      <Route path="/business" element={<Business/>}></Route>
      <Route path="/business/agency" element={<LoanAgency/>}></Route>
      <Route path="/business/merchant" element={<Merchant/>}></Route>
      <Route path="/business/business" element={<BusinessLoan/>}></Route>
      <Route path="/business/savings" element={<SavingBusiness/>}></Route>
      <Route path="/business/salary" element={<SalaryLoan/>}></Route>
      <Route path="/business/micro-lending" element={<MicroLending/>}></Route>
      <Route path="/business/credit-card" element={<CreditCard/>}></Route>
      <Route path="/personal/student" element={<EducationalLoan/>}></Route>
      <Route path="/personal/salary-advance" element={<SalaryAdvance/>}></Route>
      <Route path="/personal/market-place" element={<MarketPlace/>}></Route>
      <Route path="/personal/savings" element={<FixedDepo/>}></Route>
      <Route path="/personal/quickcredit" element={<QuickCredit/>}></Route>
      <Route path="/personal/mortgage" element={<Mortgage/>}></Route>
      <Route path="/personal/tourism" element={<Tourism/>}></Route>
      <Route path="/personal/pawn" element={<Pawn/>}></Route>
      <Route path="/personal/community" element={<ComLoan/>}></Route>
      <Route path="/personal/auto" element={<AutoLoans/>}></Route>
      <Route path="/personal/credit-card" element={<PersonalCC/>}></Route>
      <Route path="/personal/bills" element={<Bills/>}></Route>
      <Route path="/wallet" element={<Wallets/>}></Route>
      <Route path="/sign-up" element={<Register/>}></Route>
      <Route path="/sign-up/otp" element={<SignupOTP/>}></Route>
      <Route path="/change-email" element={<ChangeEmail/>}></Route>
      <Route path="/sign-up/merchant" element={<MerchantSignup/>}></Route>
      <Route path="/sign-up/company" element={<CompanySignup/>}></Route>
      <Route path="/sign-up/agent" element={<AgentSignup/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/login/otp" element={<LoginOTP/>}></Route>
      <Route path="/recover-password" element={<ForgotP/>}></Route>
      <Route path="/set-password" element={<NewPassword/>}></Route>
      <Route path="/business/lpo" element={<LPO/>}></Route>
      <Route path="/career" element={<Careers/>}></Route>
      <Route path="/career/apply" element={<Apply/>}></Route>
      <Route path="/404" element={<Error/>}></Route>
      <Route path="*" element={<Navigate to="/404" replace />}></Route>
      <Route path="/termsandconditons" element={<TermsCond/>}></Route>
      <Route path="/privacypolicy" element={<PrivacyPolicy/>}></Route>
      <Route path="/complaints" element={<Complaints/>}></Route>
      <Route path="/faqs" element={<Faqs/>}></Route>
      <Route path="/press-media" element={<PressMedia/>}></Route>
      <Route path="/blogs" element={<Blogs/>}></Route>
      <Route path="/press/logos" element={<Logos/>}></Route>
      <Route path="/blog/maximizing-loan" element={<BlogMaximize/>}></Route>
      <Route path="/blog/lending-apps" element={<BlogLending/>}></Route>
      <Route path="/blog/saving" element={<Blogsave/>}></Route>
      <Route path="/blog/loan-eligibility" element={<BlogEli/>}></Route>
      <Route path="/blog/defaulting-loans" element={<BlogDefault/>}></Route>
     
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
