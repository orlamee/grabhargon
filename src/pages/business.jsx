import Accelerate from "../components/businessPage/accelerate";
import BannerBusiness from "../components/businessPage/bannerBusiness";
import BusinessCredit from "../components/businessPage/businessCredit";
import ExpandBusiness from "../components/businessPage/expandBusiness";
import MarketPlace from "../components/businessPage/marketPlace";
import PaydayLoan from "../components/businessPage/paydayLoan";
import Footer from "../components/footer";
import Header from "../components/navbar";
import SemiFooter from "../components/personalPage/semiFooter";




function Business () {
  return (
    <div>
      <Header/>
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
