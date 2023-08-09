import EduHeader from "../components/educationalLoan/eduHeader";
import Focus from "../components/educationalLoan/focus";
import Hero from "../components/educationalLoan/hero";
import IntFund from "../components/educationalLoan/intFund";
import Pocket from "../components/educationalLoan/pocket";
import SchoolFees from "../components/educationalLoan/schoolFees";
import Footer from "../components/footer";
import SemiFooter from "../components/personalPage/semiFooter";
import { Description, Title } from "react-head-meta";




function EducationalLoan () {
  return (
    <div>
       <div>
        <Title title=" The Path to Tomorrow  " />
        <Description
          description="Nothing prepares you for a brighter future like a good education. With Hargon, you now have the finances to make this possible.
 "
        />
      </div>
      <EduHeader/>
      <Hero/>
      <Focus/>
      <IntFund/>
      <SchoolFees/>
      <Pocket/>
      <SemiFooter/>
      <Footer/>
    </div>
  )
}

export default EducationalLoan;
