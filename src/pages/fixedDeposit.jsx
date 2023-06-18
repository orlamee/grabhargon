import EduHeader from "../components/educationalLoan/eduHeader";
import Footer from "../components/footer";
import SemiFooter from "../components/personalPage/semiFooter";
import DigitalBank from "../components/savefixDeposit/digitalBank";
import FixedHero from "../components/savefixDeposit/fixedHero";
import LowerRisk from "../components/savefixDeposit/lowerRisk";




function FixedDepo () {
  return (
    <div>
      <EduHeader/>
      <FixedHero/>
      <DigitalBank/>
      <LowerRisk/>
      <SemiFooter/>
      <Footer/>
    </div>
  )
}

export default FixedDepo;
