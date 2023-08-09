
import BusinessHeader from "../components/businessPage/businessHeader";
import Footer from "../components/footer";
import SemiFooter from "../components/personalPage/semiFooter";
import LoanSalary from "../components/salaryLoan/loanSalary";
import Payroll from "../components/salaryLoan/payroll";
import EMP from "../components/salaryLoan/salaryForEmployee";
import SalaryLoanHero from "../components/salaryLoan/slHero";
import { Description, Title } from "react-head-meta";




function SalaryLoan () {
  return (
    <div>
       <div>
        <Title title="   Keeping your employees happy  " />
        <Description
          description="
          Are you having an issue meeting up with your company's salary obligations? Get salary loans and ensure your employees are kept happy and motivated.
 "
        />
      </div>
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
