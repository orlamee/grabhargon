import React from 'react'
import EduHeader from "../components/educationalLoan/eduHeader";
import DebtContent from '../components/blog/debtContent';
import Replies from '../components/replies';
import SemiFooter from '../components/personalPage/semiFooter';
import Footer from "../components/footer";
import { Description, Title } from "react-head-meta";


function BlogDebt() {
  return (
    <div>
      <div>
        <Title title=" 8 steps to get out of debt
 " />
        <Description
          description="  Getting out of debt can be challenging but it doesn’t have to be so. Use these 8 steps to get off debt.



 "
        />
      </div>
     <EduHeader />
     <DebtContent/>
     <Replies />
     <SemiFooter />
     <Footer />
    </div>
  );
}

export default BlogDebt;