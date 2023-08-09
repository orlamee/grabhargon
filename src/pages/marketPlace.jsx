import EduHeader from "../components/educationalLoan/eduHeader";
import Footer from "../components/footer";
import BuyNow from "../components/mPlace/buyNow";
import HargonCredit from "../components/mPlace/hargonCredit";
import Invest from "../components/mPlace/investor";
import MPHero from "../components/mPlace/mHero";
import Vendor from "../components/mPlace/vendor";
import SemiFooter from "../components/personalPage/semiFooter";
import { Description, Title } from "react-head-meta";

function MarketPlace() {
  return (
    <div>
      <div>
        <Title title="Buy and sell on credit " />
        <Description
          description="Shop on Hargon's marketplace and revel in the excitement of buying on credit. Explore items of all sorts. From electronics to food, jewellery and many more. 
 "
        />
      </div>
      <EduHeader />
      <MPHero />
      <BuyNow />
      <Vendor />
      <Invest />
      <HargonCredit />
      <SemiFooter />
      <Footer />
    </div>
  );
}

export default MarketPlace;
