import React from 'react'
import EduHeader from "../components/educationalLoan/eduHeader";
import ComplainHero from '../components/transparency/complainHero';
import ComplainContent from '../components/transparency/complainContent';
import ComplainBox from '../components/transparency/complainBox';
import SemiFooter from "../components/personalPage/semiFooter";
import Footer from "../components/footer";

function Complaints() {
  return (
    <div>
     <EduHeader />
      <ComplainHero />
      <ComplainContent />
      <ComplainBox />
      <SemiFooter />
      <Footer />
    </div>
  );
}

export default Complaints;