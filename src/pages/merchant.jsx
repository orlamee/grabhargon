import BusinessHeader from "../components/businessPage/businessHeader";
import Footer from "../components/footer";
import Dashboard from "../components/merchant/dashboard";
import HargonP from "../components/merchant/hargonPartner";
import HowItWOrk from "../components/merchant/howitWork";
import MerchantHero from "../components/merchant/merchantHero";
import Register from "../components/merchant/register";
import SemiFooter from "../components/personalPage/semiFooter";
import { Description, Title } from "react-head-meta";




function Merchant () {
  return (
    <div>
      <div>
        <Title title=" Explore new opportunities.   " />
        <Description
          description="
          Join Hargon as a merchant today and enjoy access to more customers, revenue, and profit. It is free with unparalleled capabilities. What are you waiting for? 
 "
        />
      </div>
      <BusinessHeader/>
      <MerchantHero/>
      <HargonP/>
      <HowItWOrk/>
      <Register/>
      <Dashboard/>
      <SemiFooter/>
      <Footer/>
    </div>
  )
}

export default Merchant;
