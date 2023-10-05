import React from 'react'
import Footer from "../components/footer";
import Stayfinancially from '../components/pday/stayfinancially';
import Somuch from '../components/pday/somuch';
import Payloan from '../components/pday/payloan';
import Yourfuture from '../components/pday/yourfuture';
import SemiFooter from "../components/personalPage/semiFooter";
import EduHeader from '../components/educationalLoan/eduHeader';
import { Description, Title } from "react-head-meta";



function Payday() {
  return (
    <div>
        <div>
        <Title title="Need a payday loan from Hargon? " />
        <Description
          description="Having difficulties accessing funds for urgent problems? Our pat day loans offer the perfect solution for you. Get a loan now, pay back on your pay day.
 "
        />
      </div>
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