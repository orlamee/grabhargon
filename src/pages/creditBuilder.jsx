import CBHero from "../components/creditBuilder/cbHero";
import CreditBuilders from "../components/creditBuilder/creditBuilder";
import ItWorks from "../components/creditBuilder/itWork";
import Footer from "../components/footer";
import Header from "../components/navbar";
import SemiFooter from "../components/personalPage/semiFooter";
import { Description, Title } from "react-head-meta";

function CreditBuilder() {
  return (
    <div>
      <div>
        <Title title=" Credit score booster  " />
        <Description
          description="Boost your credit score and increase your chances of getting a better loan facility using our credit builder. It is effective and has shown great results.
 "
        />
      </div>
      <Header />
      <CBHero />
      <CreditBuilders />
      <ItWorks />
      <SemiFooter />
      <Footer />
    </div>
  );
}

export default CreditBuilder;
