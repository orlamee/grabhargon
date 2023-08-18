import React from 'react'
import Header from "../components/navbar";
import Footer from "../components/footer";
import Credit from '../components/studentpage/credit';
import Worryfree from '../components/studentpage/worryfree';
import Studentheader from '../components/studentpage/studentheader';
import Focus from '../components/studentpage/focus';
import SemiFooter from "../components/personalPage/semiFooter";

function Student() {
  return (
    <div>
    <Header/>
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