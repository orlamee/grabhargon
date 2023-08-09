
import BusinessHeader from "../components/businessPage/businessHeader";
import Footer from "../components/footer";
import AccessUnlimited from "../components/loanAgency/accessUnlimited";
import Interest from "../components/loanAgency/interest";
import InterestRate from "../components/loanAgency/interestRate";
import LoanHero from "../components/loanAgency/loanHero";
import Personalized from "../components/loanAgency/personalizedLoan";
import SemiFooter from "../components/personalPage/semiFooter";
import { Description, Title } from "react-head-meta";




function LoanAgency () {
  return (
    <div>
      <div>
        <Title title="   Growing your financial reach  " />
        <Description
          description="
          Leverage the financial strength of Hargon and drive growth for your loan agency. Partner with Hargon to reach more customers and drive growth.
 "
        />
      </div>
      <BusinessHeader/>
      <LoanHero/>
      <AccessUnlimited/>
      <Interest/>
      <Personalized/>
      <InterestRate/>
      <SemiFooter/>
      <Footer/>
    </div>
  )
}

export default LoanAgency;
