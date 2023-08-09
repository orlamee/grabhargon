import Accelerate from "../components/businessPage/accelerate";
import BannerBusiness from "../components/businessPage/bannerBusiness";
import BusinessCredit from "../components/businessPage/businessCredit";
import BusinessHeader from "../components/businessPage/businessHeader";
import ExpandBusiness from "../components/businessPage/expandBusiness";
import MarketPlace from "../components/businessPage/marketPlace";
import PaydayLoan from "../components/businessPage/paydayLoan";
import Footer from "../components/footer";
import SemiFooter from "../components/personalPage/semiFooter";
import { Description, Title } from "react-head-meta";




function Business () {
  return (
    <div>
       <div>
        <Title title="  Business finances simplified"/>
        <Description description="Unlock the potential of your business and help support it to achieve so much with amazing financial products from Hargon. "/>
      </div>
      <BusinessHeader/>
      <BannerBusiness/>
      <BusinessCredit/>
      <PaydayLoan/>
      <MarketPlace/>
      <ExpandBusiness/>
      <Accelerate/>
      <SemiFooter/>
      <Footer/>
    </div>
  )
}

export default Business;
