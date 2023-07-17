import React from 'react'
import Footer from "../components/footer";
import TermsBreadcrumb from '../components/transparency/termsBreadcrumb';
import EduHeader from "../components/educationalLoan/eduHeader";
import SemiFooter from "../components/personalPage/semiFooter";
import Terms from '../components/transparency/terms';



function TermsCond() {
  return (
    <div>
      
      <EduHeader/>
        <TermsBreadcrumb />
       <Terms />
        <SemiFooter/>
        <Footer/>
    </div>
  );
}

export default TermsCond;