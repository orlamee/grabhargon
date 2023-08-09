
import BusinessHeader from "../components/businessPage/businessHeader";
import BusinessExpansion from "../components/capital/businessExpansion";
import BusinessInnovation from "../components/capital/businessInnovation";
import Capital from "../components/capital/capital";
import CapitalHero from "../components/capital/capitalHero";
import FuelDreams from "../components/capital/fuelingDreams";
import VendorCredit from "../components/capital/vendorCredit";
import Footer from "../components/footer";
import SemiFooter from "../components/personalPage/semiFooter";
import { Description, Title } from "react-head-meta";




function BusinessLoan () {
  return (
    <div>
       <div>
        <Title title="   Fueling your business growth  " />
        <Description
          description="
          Fuel your business growth and opportunities using capital inflow from Hargon. Unlock the full potential of your business.
 "
        />
      </div>
      <BusinessHeader/>
      <CapitalHero/>
      <Capital/>
      <VendorCredit/>
      <BusinessInnovation/>
      <BusinessExpansion/>
      <FuelDreams/>
      <SemiFooter/>
      <Footer/>
    </div>
  )
}

export default BusinessLoan;
