import EduHeader from "../components/educationalLoan/eduHeader";
import Footer from "../components/footer";
import FlexRepay from "../components/mortgage/flexRepay";
import HomeOwnership from "../components/mortgage/homeOwnership";
import LoanMortgage from "../components/mortgage/loanMortage";
import MortgageHero from "../components/mortgage/mortgageHero";
import RealEstate from "../components/mortgage/realEstate";
import Renting from "../components/mortgage/renting";
import SemiFooter from "../components/personalPage/semiFooter";



function Mortgage () {
  return (
    <div>
      <EduHeader/>
      <MortgageHero/>
      <HomeOwnership/>
      <Renting/>
      <RealEstate/>
      <FlexRepay/>
      <LoanMortgage/>
      <SemiFooter/>
      <Footer/>
    </div>
  )
}

export default Mortgage;
