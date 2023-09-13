import React from 'react'
import EduHeader from "../components/educationalLoan/eduHeader";
import ComplainHero from '../components/transparency/complainHero';
import ComplainContent from '../components/transparency/complainContent';
import ComplainBox from '../components/transparency/complainBox';
import SemiFooter from "../components/personalPage/semiFooter";
import Footer from "../components/footer";
import { Description, Title } from "react-head-meta";

function Complaints() {
  return (
    <div>
       <div>
        <Title title="Resolve any issues you have  " />
        <Description
          description="
          Are you having issues with our platform or are you finding it difficult to access or multiple solutions? We would love to hear from you and assist.
 "
        />
      </div>
     <EduHeader />
      <ComplainHero />
      <ComplainContent />
      <ComplainBox />
      <SemiFooter />
      <Footer />
    </div>
  );
}

export default Complaints;