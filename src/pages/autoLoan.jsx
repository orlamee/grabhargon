import AutoFinancing from "../components/autoLoans/autoFinancing";
import AutoHero from "../components/autoLoans/autoHero";
import GettingStarted from "../components/autoLoans/gettingStarted";
import RepaymentTerm from "../components/autoLoans/repaymentTerms";
import YourWhip from "../components/autoLoans/yourWhip";
import EduHeader from "../components/educationalLoan/eduHeader";
import Footer from "../components/footer";
import SemiFooter from "../components/personalPage/semiFooter";
import { Description, Title } from "react-head-meta";



function AutoLoans () {
  return (
    <div>
      <div>
        <Title title="  Making your dream car possible  " />
        <Description
          description="
          Make your dream car come through using Hargons credit. Our repayment terms are convenient and flexible, giving you what you need to get it done.
 "
        />
      </div>
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
