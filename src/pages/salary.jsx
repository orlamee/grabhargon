import Footer from "../components/footer";
import BusinessHeader from "../components/businessPage/businessHeader";
import SemiFooter from "../components/personalPage/semiFooter";
import Dreams from "../components/salaryAdvance/dreamCash";
import PDLoans from "../components/salaryAdvance/pdLoans";
import PE from "../components/salaryAdvance/personalEmergency";
import SalaryHero from "../components/salaryAdvance/salaryHero";
import { Description, Title } from "react-head-meta";




function SalaryAdvance () {
  return (
    <div>
      <div>
        <Title title=" Salary Advance  " />
        <Description
          description="Urgent situations require urgent attention. Get a salary advance and meet up with your financial responsibilities.
 "
        />
      </div>
      <BusinessHeader/>
      <SalaryHero/>
      <PDLoans/>
      <PE/>
      <Dreams/>
      <SemiFooter/>
      <Footer/>
    </div>
  )
}

export default SalaryAdvance;
