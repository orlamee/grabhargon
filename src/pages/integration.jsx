import Footer from "../components/footer";
import Boost from "../components/integrate/boost";
import IntegrateHero from "../components/integrate/integrateHero";
import IntegrateSolution from "../components/integrate/integrateSolution";
import Seamless from "../components/integrate/seamless";
import Header from "../components/navbar";
import SemiFooter from "../components/personalPage/semiFooter";





function Integration () {
  return (
    <div>
      <Header/>
      <IntegrateHero/>
      <IntegrateSolution/>
      <Boost/>
      <Seamless/>
      <SemiFooter/>
      <Footer/>
    </div>
  )
}

export default Integration;
