import React from 'react'
import Header from "../components/navbar";
import Footer from "../components/footer";
import Stayfinancially from '../components/pday/stayfinancially';
import Somuch from '../components/pday/somuch';
import Payloan from '../components/pday/payloan';
import Yourfuture from '../components/pday/yourfuture';
import SemiFooter from "../components/personalPage/semiFooter";



function Payday() {
  return (
    <div>
      <Header/>
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