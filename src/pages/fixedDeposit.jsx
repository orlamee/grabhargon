import EduHeader from "../components/educationalLoan/eduHeader";
import Footer from "../components/footer";
import SemiFooter from "../components/personalPage/semiFooter";
import DigitalBank from "../components/savefixDeposit/digitalBank";
import FixedHero from "../components/savefixDeposit/fixedHero";
import LowerRisk from "../components/savefixDeposit/lowerRisk";
import SaveHargon from "../components/savefixDeposit/saveHargon";




function FixedDepo () {
  return (
    <div>
      <EduHeader/>
      <FixedHero/>
      <DigitalBank/>
      <LowerRisk/>
      <SaveHargon/>
      <SemiFooter/>
      <Footer/>
    </div>
  )
}

export default FixedDepo;
