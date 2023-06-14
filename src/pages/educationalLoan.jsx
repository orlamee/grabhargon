import Focus from "../components/educationalLoan/focus";
import Hero from "../components/educationalLoan/hero";
import IntFund from "../components/educationalLoan/intFund";
import Pocket from "../components/educationalLoan/pocket";
import SchoolFees from "../components/educationalLoan/schoolFees";
import Footer from "../components/footer";
import Header from "../components/navbar";
import SemiFooter from "../components/personalPage/semiFooter";




function EducationalLoan () {
  return (
    <div>
      <Header/>
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
