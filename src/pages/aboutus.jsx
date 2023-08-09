import SemiFooter from "../components/personalPage/semiFooter";
import Footer from "../components/footer";
import Header from "../components/navbar";
import AboutHero from "../components/aboutus/aboutHero";
import Fitwell from "../components/aboutus/fitwell";
import YourDreams from "../components/aboutus/yourDreams";
import OurV from "../components/aboutus/ourVision";
import OurM from "../components/aboutus/ourMission";
import TakeAdvantage from "../components/aboutus/takeAdvantage";
import { Description, Title } from "react-head-meta";

function Aboutus () {
  return (
    <div>
      <div>
        <Title title="The Hargon Story and Vision"/>
        <Description description="Hargon is a multi-faceted credit platform that provides you with the best innovative financial solutions by leveraging technology. "/>
      </div>
      <Header/>
      <AboutHero/>
      <Fitwell/>
      <YourDreams/>
      <OurV/>
      <OurM/>
      <TakeAdvantage/>
      <SemiFooter/>
      <Footer/>
    </div>
  )
}

export default Aboutus;
