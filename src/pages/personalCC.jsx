import EduHeader from "../components/educationalLoan/eduHeader";
import Footer from "../components/footer";
import SemiFooter from "../components/personalPage/semiFooter";
import FlexibleCC from "../components/personalcc/flexiblecc";
import HargonCred from "../components/personalcc/hargonCredit";
import PCCHero from "../components/personalcc/pccHero";
import PremiumCard from "../components/personalcc/premiumCard";
import ShopTravel from "../components/personalcc/shopTravel";
import { Description, Title } from "react-head-meta";



function PersonalCC () {
  return (
    <div>
       <div>
        <Title title=" Pocket-friendly credit   " />
        <Description
          description="
          Apply for Hargon's credit today and unlock new possibilities. Shop, travel, and indulge using Hargon's credit card. Your favourite credit tool. 
 "
        />
      </div>
      <EduHeader/>
      <PCCHero/>
      <HargonCred/>
      <ShopTravel/>
      <FlexibleCC/>
      <PremiumCard/>
      <SemiFooter/>
      <Footer/>
    </div>
  )
}

export default PersonalCC;
