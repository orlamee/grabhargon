import Footer from "../components/footer";
import HomeOwnership from "../components/mortgage/homeOwnership";
import MortgageHero from "../components/mortgage/mortgageHero";
import RealEstate from "../components/mortgage/realEstate";
import Renting from "../components/mortgage/renting";
import PersonalHeader from "../components/personalNavbar";
import SemiFooter from "../components/personalPage/semiFooter";



function Mortgage () {
  return (
    <div>
      <PersonalHeader/>
      <MortgageHero/>
      <HomeOwnership/>
      <Renting/>
      <RealEstate/>
      <SemiFooter/>
      <Footer/>
    </div>
  )
}

export default Mortgage;
