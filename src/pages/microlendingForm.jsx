import React from 'react'
import MicrolendForm from '../components/microlendForm';
import LpoForms from "../components/lpoForms";
import SemiFooter from "../components/personalPage/semiFooter";
import Footer from '../components/footer';

function MicrolendingForm() {
  return (
    <div>
      <MicrolendForm />
      <LpoForms />
      <SemiFooter />
      <Footer />
    </div>
  );
}

export default MicrolendingForm;