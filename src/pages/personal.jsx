import EduHeader from "../components/educationalLoan/eduHeader";
import Footer from "../components/footer";
import Allowance from "../components/personalPage/allowance";
import Banner from "../components/personalPage/banner";
import EducationalLoan from "../components/personalPage/educationLoan";
import LoanRange from "../components/personalPage/loanRange";
import Mortgage from "../components/personalPage/mortgage";
import SalaryAdvance from "../components/personalPage/salaryAdvance";
import SemiFooter from "../components/personalPage/semiFooter";



function Personal () {
  return (
    <div>
      <EduHeader/>
      <Banner/>
      <EducationalLoan/>
      <Allowance/>
      <Mortgage/>
      <SalaryAdvance/>
      <LoanRange/>
      <SemiFooter/>
      <Footer/>
    </div>
  )
}

export default Personal;
