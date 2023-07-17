import React from 'react'
import EduHeader from "../components/educationalLoan/eduHeader";
import LogoHero from '../components/press/logoHero';
import LogoContent from '../components/press/logoContent';
import SemiFooter from "../components/personalPage/semiFooter";
import Footer from "../components/footer";

function Logos() {
  return (
    <div>
    <EduHeader />
    <LogoHero />
   <LogoContent />
    <SemiFooter />
     <Footer />
   </div>
  );
   
}

export default Logos;