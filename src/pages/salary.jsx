import Footer from "../components/footer";
import PersonalHeader from "../components/personalNavbar";
import SemiFooter from "../components/personalPage/semiFooter";
import Dreams from "../components/salaryAdvance/dreamCash";
import PDLoans from "../components/salaryAdvance/pdLoans";
import PE from "../components/salaryAdvance/personalEmergency";
import SalaryHero from "../components/salaryAdvance/salaryHero";




function SalaryAdvance () {
  return (
    <div>
      <PersonalHeader/>
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
