
import BusinessHeader from "../components/businessPage/businessHeader";
import Footer from "../components/footer";
import AccessUnlimited from "../components/loanAgency/accessUnlimited";
import Interest from "../components/loanAgency/interest";
import InterestRate from "../components/loanAgency/interestRate";
import LoanHero from "../components/loanAgency/loanHero";
import Personalized from "../components/loanAgency/personalizedLoan";
import SemiFooter from "../components/personalPage/semiFooter";




function LoanAgency () {
  return (
    <div>
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
