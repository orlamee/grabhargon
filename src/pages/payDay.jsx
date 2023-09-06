import React from 'react'
import Footer from "../components/footer";
import Stayfinancially from '../components/pday/stayfinancially';
import Somuch from '../components/pday/somuch';
import Payloan from '../components/pday/payloan';
import Yourfuture from '../components/pday/yourfuture';
import SemiFooter from "../components/personalPage/semiFooter";
import EduHeader from '../components/educationalLoan/eduHeader';



function Payday() {
  return (
    <div>
      <EduHeader/>
      <Stayfinancially/>
      <Payloan/>
      <Somuch/>
      <Yourfuture/>
      <SemiFooter/>
      <Footer/>
    </div>
  );
}

export default Payday;