import React from 'react'
import EduHeader from "../components/educationalLoan/eduHeader";
import Footer from "../components/footer";
import Credit from '../components/studentpage/credit';
import Worryfree from '../components/studentpage/worryfree';
import Studentheader from '../components/studentpage/studentheader';
import Focus from '../components/studentpage/focus';
import SemiFooter from "../components/personalPage/semiFooter";
import { Description, Title } from "react-head-meta";


function Student() {
  return (
    <div>
       <div>
        <Title title="  Student credit solutions  " />
        <Description
          description="
          Take advantage of Hargon's student packages from POF to pocket allowances. You focus on your education while we sort out the bills
 "
        />
      </div>
    <EduHeader/>
    <Studentheader/>
    <Focus/>
    <Credit/>
    <Worryfree/>
    <SemiFooter/>
    <Footer/>
  </div>
  );
}

export default Student;