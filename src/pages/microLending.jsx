
import BusinessHeader from "../components/businessPage/businessHeader";
import Footer from "../components/footer";
import Empowering from "../components/microLend/empowering";
import MicroHero from "../components/microLend/microHero";
import NoCollateral from "../components/microLend/noCollateral";
import PayBack from "../components/microLend/payday";
import SemiFooter from "../components/personalPage/semiFooter";




function MicroLending () {
  return (
    <div>
      <BusinessHeader/>
      <MicroHero/>
      <Empowering/>
      <PayBack/>
      <NoCollateral/>
      <SemiFooter/>
      <Footer/>
    </div>
  )
}

export default MicroLending;
