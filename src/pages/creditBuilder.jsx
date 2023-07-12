
import CBHero from "../components/creditBuilder/cbHero";
import CreditBuilders from "../components/creditBuilder/creditBuilder";
import ItWorks from "../components/creditBuilder/itWork";
import Footer from "../components/footer";
import Header from "../components/navbar";
import SemiFooter from "../components/personalPage/semiFooter";





function CreditBuilder () {
  return (
    <div>
      <Header/>
      <CBHero/>
      <CreditBuilders/>
      <ItWorks/>
      <SemiFooter/>
      <Footer/>
    </div>
  )
}

export default CreditBuilder;
