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
import { Description, Title } from "react-head-meta";




function FixedDepo () {
  return (
    <div>
       <div>
        <Title title="  Making your money count  " />
        <Description
          description="
          Explore different savings options, ensuring you have the right foundation to build a better financial future for your friends and family.
 "
        />
      </div>
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
