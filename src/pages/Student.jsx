import React from 'react'
import EduHeader from "../components/educationalLoan/eduHeader";
import Footer from "../components/footer";
import Credit from '../components/studentpage/credit';
import Worryfree from '../components/studentpage/worryfree';
import Studentheader from '../components/studentpage/studentheader';
import Focus from '../components/studentpage/focus';
import SemiFooter from "../components/personalPage/semiFooter";

function Student() {
  return (
    <div>
    <EduHeader/>
    <Studentheader/>
    <Focus/>
    <Credit/>
    <Worryfree/>
    <SemiFooter/>
    <Footer/>
  </div>
  );
}

export default Student;