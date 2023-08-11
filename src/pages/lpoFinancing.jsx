import React from 'react'
import Lpofinance from '../components/lpofinance';
import LpoForms from '../components/lpoForms';
import SemiFooter from '../components/personalPage/semiFooter';
import Footer from '../components/footer';

function LpoFinancing() {
  return (
   <div>
    <Lpofinance />
    <LpoForms/>
    <SemiFooter />
    <Footer />
   </div>
  );
}

export default LpoFinancing;