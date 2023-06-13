import Footer from "../components/footer";
import Header from "../components/navbar";
import Allowance from "../components/personalPage/allowance";
import Banner from "../components/personalPage/banner";
import EducationalLoan from "../components/personalPage/educationLoan";
import Mortgage from "../components/personalPage/mortgage";



function Personal () {
  return (
    <div>
      <Header/>
      <Banner/>
      <EducationalLoan/>
      <Allowance/>
      <Mortgage/>
      <Footer/>
    </div>
  )
}

export default Personal;
