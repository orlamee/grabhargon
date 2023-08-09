import EduHeader from "../components/educationalLoan/eduHeader";
import Footer from "../components/footer";
import FlexRepay from "../components/mortgage/flexRepay";
import HomeOwnership from "../components/mortgage/homeOwnership";
import LoanMortgage from "../components/mortgage/loanMortage";
import MortgageHero from "../components/mortgage/mortgageHero";
import RealEstate from "../components/mortgage/realEstate";
import Renting from "../components/mortgage/renting";
import SemiFooter from "../components/personalPage/semiFooter";
import { Description, Title } from "react-head-meta";



function Mortgage () {
  return (
    <div>
      <div>
        <Title title=" Your dream home "/>
        <Description description=" Your dream home is only a credit away. Experience the excitement of owning a home using Hargon's credit solutions."/>
      </div>
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
