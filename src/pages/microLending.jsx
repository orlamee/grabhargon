
import BusinessHeader from "../components/businessPage/businessHeader";
import Footer from "../components/footer";
import Empowering from "../components/microLend/empowering";
import MicroHero from "../components/microLend/microHero";
import NoCollateral from "../components/microLend/noCollateral";
import PayBack from "../components/microLend/payday";
import SemiFooter from "../components/personalPage/semiFooter";
import { Description, Title } from "react-head-meta";




function MicroLending () {
  return (
    <div>
      <div>
        <Title title="  Helping the overlooked  " />
        <Description
          description="
          Financial inclusion for everyone. No matter your financial background, you have a place at Hargon with our microlending program.
 "
        />
      </div>
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
