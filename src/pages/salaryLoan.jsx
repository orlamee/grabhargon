
import BusinessHeader from "../components/businessPage/businessHeader";
import Footer from "../components/footer";
import SemiFooter from "../components/personalPage/semiFooter";
import LoanSalary from "../components/salaryLoan/loanSalary";
import Payroll from "../components/salaryLoan/payroll";
import EMP from "../components/salaryLoan/salaryForEmployee";
import SalaryLoanHero from "../components/salaryLoan/slHero";




function SalaryLoan () {
  return (
    <div>
      <BusinessHeader/>
      <SalaryLoanHero/>
      <LoanSalary/>
      <EMP/>
      <Payroll/>
      <SemiFooter/>
      <Footer/>
    </div>
  )
}

export default SalaryLoan;
