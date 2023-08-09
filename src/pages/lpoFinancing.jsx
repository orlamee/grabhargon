import React from 'react'
import Lpofinance from '../components/lpofinance';
import LpoForms from '../components/lpoForms';
import SemiFooter from '../components/personalPage/semiFooter';

function LpoFinancing() {
  return (
   <div>
    <Lpofinance />
    <LpoForms/>
    <SemiFooter />
   </div>
  );
}

export default LpoFinancing;