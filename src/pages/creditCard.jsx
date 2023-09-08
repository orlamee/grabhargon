
import BusinessHeader from "../components/businessPage/businessHeader";
import CreditCardHero from "../components/creditCard/ccHero";
import DigitalPayment from "../components/creditCard/digitalPayment";
import PaymentLoan from "../components/creditCard/paymentLoan";
import PickCard from "../components/creditCard/pickCard";
import ZeroNaira from "../components/creditCard/zeroNaira";
import Footer from "../components/footer";
import SemiFooter from "../components/personalPage/semiFooter";
import { Description, Title } from "react-head-meta";






function CreditCard () {
  return (
    <div>
        <div>
        <Title title="  Credit cards for accessible loans  " />
        <Description
          description="
          Take your credit everywhere with Hargon's credit card. Access funds for every occasion anywhere and everywhere 
 "
        />
      </div>
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
