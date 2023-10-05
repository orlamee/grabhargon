import Clients from "./components/clients";
import CreditGalore from "./components/creditGalore";
import Footer from "./components/footer";
import HomeBanner from "./components/homeBanner";
import HowHargon from "./components/howHargon";
import Investor from "./components/investor";
import Header from "./components/navbar";
import PayBill from "./components/payBill";
import Testimony from "./components/testimony";
import WhyChoose from "./components/whyChoose";


function App () {
  return (
    <div>
      <Header/>
      <HomeBanner/>
      <WhyChoose/>
      <HowHargon/>
      <Testimony/>
      <PayBill/>
      <CreditGalore/>
      <Investor/>
      <Clients/>
      <Footer/>
    </div>
  )
}

export default App;
