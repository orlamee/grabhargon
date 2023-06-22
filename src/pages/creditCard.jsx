
import BusinessHeader from "../components/businessPage/businessHeader";
import CreditCardHero from "../components/creditCard/ccHero";
import DigitalPayment from "../components/creditCard/digitalPayment";
import PaymentLoan from "../components/creditCard/paymentLoan";
import PickCard from "../components/creditCard/pickCard";
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
      <SemiFooter/>
      <Footer/>
    </div>
  )
}

export default CreditCard;
