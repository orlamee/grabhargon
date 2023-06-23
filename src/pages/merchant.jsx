import BusinessHeader from "../components/businessPage/businessHeader";
import Footer from "../components/footer";
import Dashboard from "../components/merchant/dashboard";
import HargonP from "../components/merchant/hargonPartner";
import HowItWOrk from "../components/merchant/howitWork";
import MerchantHero from "../components/merchant/merchantHero";
import Register from "../components/merchant/register";
import SemiFooter from "../components/personalPage/semiFooter";




function Merchant () {
  return (
    <div>
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
