import AutoFinancing from "../components/autoLoans/autoFinancing";
import AutoHero from "../components/autoLoans/autoHero";
import GettingStarted from "../components/autoLoans/gettingStarted";
import RepaymentTerm from "../components/autoLoans/repaymentTerms";
import YourWhip from "../components/autoLoans/yourWhip";
import EduHeader from "../components/educationalLoan/eduHeader";
import Footer from "../components/footer";
import SemiFooter from "../components/personalPage/semiFooter";



function AutoLoans () {
  return (
    <div>
      <EduHeader/>
      <AutoHero/>
      <YourWhip/>
      <RepaymentTerm/>
      <GettingStarted/>
      <AutoFinancing/>
      <SemiFooter/>
      <Footer/>
    </div>
  )
}

export default AutoLoans;
