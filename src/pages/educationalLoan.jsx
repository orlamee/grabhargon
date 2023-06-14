import EduHeader from "../components/educationalLoan/eduHeader";
import Focus from "../components/educationalLoan/focus";
import Hero from "../components/educationalLoan/hero";
import IntFund from "../components/educationalLoan/intFund";
import Pocket from "../components/educationalLoan/pocket";
import SchoolFees from "../components/educationalLoan/schoolFees";
import Footer from "../components/footer";
import SemiFooter from "../components/personalPage/semiFooter";




function EducationalLoan () {
  return (
    <div>
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
