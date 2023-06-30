import AutoBills from "../components/bills/autoBill";
import BillConcierge from "../components/bills/billConcierge";
import BillPayment from "../components/bills/billPayment";
import BillsHero from "../components/bills/billsHero";
import NoHiddenCharges from "../components/bills/noHidden";
import EduHeader from "../components/educationalLoan/eduHeader";
import Footer from "../components/footer";
import SemiFooter from "../components/personalPage/semiFooter";





function Bills () {
  return (
    <div>
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
