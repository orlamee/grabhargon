
import BusinessHeader from "../components/businessPage/businessHeader";
import CreditCardHero from "../components/creditCard/ccHero";
import DigitalPayment from "../components/creditCard/digitalPayment";
import Footer from "../components/footer";
import SemiFooter from "../components/personalPage/semiFooter";




function CreditCard () {
  return (
    <div>
      <BusinessHeader/>
      <CreditCardHero/>
      <DigitalPayment/>
      <SemiFooter/>
      <Footer/>
    </div>
  )
}

export default CreditCard;
