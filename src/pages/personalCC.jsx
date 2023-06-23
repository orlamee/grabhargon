import EduHeader from "../components/educationalLoan/eduHeader";
import Footer from "../components/footer";
import SemiFooter from "../components/personalPage/semiFooter";
import FlexibleCC from "../components/personalcc/flexiblecc";
import HargonCred from "../components/personalcc/hargonCredit";
import PCCHero from "../components/personalcc/pccHero";
import PremiumCard from "../components/personalcc/premiumCard";
import ShopTravel from "../components/personalcc/shopTravel";



function PersonalCC () {
  return (
    <div>
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
