
import BusinessHeader from "../components/businessPage/businessHeader";
import Footer from "../components/footer";
import SemiFooter from "../components/personalPage/semiFooter";
import FeaturesHargon from "../components/savings/featuresHargon";
import HowWorks from "../components/savings/howworks";
import SavingsHero from "../components/savings/savingsHero";
import StepInto from "../components/savings/stepInto";
import { Description, Title } from "react-head-meta";




function SavingBusiness () {
  return (
    <div>
       <div>
        <Title title="   Building a solid financial foundation " />
        <Description
          description="
          Grow and diversify your business cash reserves by using our savings platform. Enjoy upfront interest and cashback.
 "
        />
      </div>
      <BusinessHeader/>
      <SavingsHero/>
      <StepInto/>
      <FeaturesHargon/>
      <HowWorks/>
      <SemiFooter/>
      <Footer/>
    </div>
  )
}

export default SavingBusiness;
