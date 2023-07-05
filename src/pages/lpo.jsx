import BusinessHeader from "../components/businessPage/businessHeader";
import Footer from "../components/footer";
import BusinessNeed from "../components/lpo/businessNeed";
import Fuel from "../components/lpo/fuel";
import GoBigger from "../components/lpo/goBigger";
import HowToApply from "../components/lpo/howtoapply";
import LPOHero from "../components/lpo/lpoHero";
import SayGood from "../components/lpo/sayGoodbye";
import SemiFooter from "../components/personalPage/semiFooter";




function LPO () {
  return (
    <div>
      <BusinessHeader/>
      <LPOHero/>
      <SayGood/>
      <Fuel/>
      <HowToApply/>
      <BusinessNeed/>
      <GoBigger/>
      <SemiFooter/>
      <Footer/>
    </div>
  )
}

export default LPO;
