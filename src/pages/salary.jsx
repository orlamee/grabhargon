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
        <Title title=" Salary advance financing solutions for businesses  " />
        <Description
          description=" 
          Your staff did their job, paying them doesn't have to be difficult. Explore our salary advance financing solutions for your business
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
