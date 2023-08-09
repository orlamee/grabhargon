import EduHeader from "../components/educationalLoan/eduHeader";
import Footer from "../components/footer";
import Allowance from "../components/personalPage/allowance";
import Banner from "../components/personalPage/banner";
import EducationalLoan from "../components/personalPage/educationLoan";
import LoanRange from "../components/personalPage/loanRange";
import Mortgage from "../components/personalPage/mortgage";
import SalaryAdvance from "../components/personalPage/salaryAdvance";
import SemiFooter from "../components/personalPage/semiFooter";
import { Description, Title } from "react-head-meta";



function Personal () {
  return (
    <div>
      <div>
        <Title title=" Personal finance made easy"/>
        <Description description="Take control of your finances with our credit and savings products designed to help you achieve your financial dreams and goals. "/>
      </div>
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
