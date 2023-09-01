import EduHeader from "../components/educationalLoan/eduHeader";
import Footer from "../components/footer";
import MarkHero from "../components/markPlace/markHero";
import Buynow from "../components/markPlace/buynow";
import Everything from "../components/markPlace/everything";
import More from "../components/markPlace/more";
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
      <MarkHero />
      <Buynow />
      <Everything />
      <More />
      <SemiFooter />
      <Footer />
    </div>
  );
}

export default MarketPlace;
