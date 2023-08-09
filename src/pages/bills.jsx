import AutoBills from "../components/bills/autoBill";
import BillConcierge from "../components/bills/billConcierge";
import BillPayment from "../components/bills/billPayment";
import BillsHero from "../components/bills/billsHero";
import NoHiddenCharges from "../components/bills/noHidden";
import EduHeader from "../components/educationalLoan/eduHeader";
import Footer from "../components/footer";
import SemiFooter from "../components/personalPage/semiFooter";
import { Description, Title } from "react-head-meta";





function Bills () {
  return (
    <div>
       <div>
        <Title title="  Your bill concierge  " />
        <Description
          description="
          Streamline your bill payments using Hargon.  Enjoy amazing features such as auto bill payment, cash back, and paying bills using credit. 
 "
        />
      </div>
      <EduHeader/>
      <BillsHero/>
      <BillPayment/>
      <NoHiddenCharges/>
      <BillConcierge/>
      <AutoBills/>
      <SemiFooter/>
      <Footer/>
    </div>
  )
}

export default Bills;
