import EduHeader from "../components/educationalLoan/eduHeader";
import Footer from "../components/footer";
import SemiFooter from "../components/personalPage/semiFooter";
import DigitalBank from "../components/savefixDeposit/digitalBank";
import FixedHero from "../components/savefixDeposit/fixedHero";
import LowerRisk from "../components/savefixDeposit/lowerRisk";
import SaveHargon from "../components/savefixDeposit/saveHargon";
import SaveInvest from "../components/savefixDeposit/saveInvest";
import SavingThrive from "../components/savefixDeposit/savingThrive";
import Work from "../components/savefixDeposit/works";




function FixedDepo () {
  return (
    <div>
      <EduHeader/>
      <FixedHero/>
      <DigitalBank/>
      <LowerRisk/>
      <SaveHargon/>
      <SavingThrive/>
      <SaveInvest/>
      <Work/>
      <SemiFooter/>
      <Footer/>
    </div>
  )
}

export default FixedDepo;
