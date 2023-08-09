import BusinessHeader from "../components/businessPage/businessHeader";
import Footer from "../components/footer";
import BusinessNeed from "../components/lpo/businessNeed";
import Fuel from "../components/lpo/fuel";
import GoBigger from "../components/lpo/goBigger";
import HowToApply from "../components/lpo/howtoapply";
import LPOHero from "../components/lpo/lpoHero";
import SayGood from "../components/lpo/sayGoodbye";
import SemiFooter from "../components/personalPage/semiFooter";
import { Description, Title } from "react-head-meta";




function LPO () {
  return (
    <div>
      <div>
        <Title title="   Meeting your business obligations " />
        <Description
          description="
          Get specialized LPO financing tailored to help your business meet its financial obligations and grow its potential.
 "
        />
      </div>
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
