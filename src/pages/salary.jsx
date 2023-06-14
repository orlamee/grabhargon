import Footer from "../components/footer";
import PersonalHeader from "../components/personalNavbar";
import SemiFooter from "../components/personalPage/semiFooter";
import PDLoans from "../components/salaryAdvance/pdLoans";
import SalaryHero from "../components/salaryAdvance/salaryHero";




function SalaryAdvance () {
  return (
    <div>
      <PersonalHeader/>
      <SalaryHero/>
      <PDLoans/>
      <SemiFooter/>
      <Footer/>
    </div>
  )
}

export default SalaryAdvance;
