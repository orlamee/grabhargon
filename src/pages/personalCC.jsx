import EduHeader from "../components/educationalLoan/eduHeader";
import Footer from "../components/footer";
import SemiFooter from "../components/personalPage/semiFooter";
import HargonCred from "../components/personalcc/hargonCredit";
import PCCHero from "../components/personalcc/pccHero";



function PersonalCC () {
  return (
    <div>
      <EduHeader/>
      <PCCHero/>
      <HargonCred/>
      <SemiFooter/>
      <Footer/>
    </div>
  )
}

export default PersonalCC;
