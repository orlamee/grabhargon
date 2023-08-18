import React from 'react'
import PoForms from '../components/poForms';
import LpoForms from "../components/lpoForms";
import SemiFooter from "../components/personalPage/semiFooter";
import Footer from "../components/footer";

function PofForm() {
  return (
    <div>
    <PoForms />
    <LpoForms />
    <SemiFooter />
    <Footer />
  </div>

  );
}

export default PofForm;