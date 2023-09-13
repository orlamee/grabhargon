import React from 'react'
import Footer from "../components/footer";
import TermsBreadcrumb from '../components/transparency/termsBreadcrumb';
import EduHeader from "../components/educationalLoan/eduHeader";
import SemiFooter from "../components/personalPage/semiFooter";
import Terms from '../components/transparency/terms';
import { Description, Title } from "react-head-meta";



function TermsCond() {
  return (
    <div>
       <div>
        <Title title="  Hargons Terms and conditions to help enrich your experience on Hargon" />
        <Description
          description="
          Our terms and conditions are a guide on what to expect from Hargon and how you can use our tools and solution for the ultimate experience
 "
        />
      </div>
      <EduHeader/>
      <TermsBreadcrumb />
      <Terms />
      <SemiFooter/>
      <Footer/>
    </div>
  );
}

export default TermsCond;