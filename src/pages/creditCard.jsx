
import BusinessHeader from "../components/businessPage/businessHeader";
import CreditCardHero from "../components/creditCard/ccHero";
import DigitalPayment from "../components/creditCard/digitalPayment";
import PaymentLoan from "../components/creditCard/paymentLoan";
import PickCard from "../components/creditCard/pickCard";
import ZeroNaira from "../components/creditCard/zeroNaira";
import Footer from "../components/footer";
import SemiFooter from "../components/personalPage/semiFooter";




function CreditCard () {
  return (
    <div>
      <BusinessHeader/>
      <CreditCardHero/>
      <DigitalPayment/>
      <PaymentLoan/>
      <PickCard/>
      <ZeroNaira/>
      <SemiFooter/>
      <Footer/>
    </div>
  )
}

export default CreditCard;
