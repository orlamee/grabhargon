import React from 'react'
import MortgageDream from '../components/mortgageDream';
import LpoForms from "../components/lpoForms";
import SemiFooter from "../components/personalPage/semiFooter";
import Footer from '../components/footer';

function MortageForm() {
  return (
    <div>
      <MortgageDream />
      <LpoForms />
      <SemiFooter />
      <Footer />
    </div>
  );
}

export default MortageForm;