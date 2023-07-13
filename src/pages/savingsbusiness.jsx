
import BusinessHeader from "../components/businessPage/businessHeader";
import Footer from "../components/footer";
import SemiFooter from "../components/personalPage/semiFooter";
import FeaturesHargon from "../components/savings/featuresHargon";
import HowWorks from "../components/savings/howworks";
import SavingsHero from "../components/savings/savingsHero";
import StepInto from "../components/savings/stepInto";




function SavingBusiness () {
  return (
    <div>
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
