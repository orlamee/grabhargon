import EduHeader from "../components/educationalLoan/eduHeader";
import Footer from "../components/footer";
import BuyNow from "../components/mPlace/buyNow";
import HargonCredit from "../components/mPlace/hargonCredit";
import Invest from "../components/mPlace/investor";
import MPHero from "../components/mPlace/mHero";
import Vendor from "../components/mPlace/vendor";
import SemiFooter from "../components/personalPage/semiFooter";




function MarketPlace () {
  return (
    <div>
      <EduHeader/>
      <MPHero/>
      <BuyNow/>
      <Vendor/>
      <Invest/>
      <HargonCredit/>
      <SemiFooter/>
      <Footer/>
    </div>
  )
}

export default MarketPlace;
