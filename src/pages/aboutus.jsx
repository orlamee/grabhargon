import SemiFooter from "../components/personalPage/semiFooter";
import Footer from "../components/footer";
import Header from "../components/navbar";
import AboutHero from "../components/aboutus/aboutHero";
import Fitwell from "../components/aboutus/fitwell";
import YourDreams from "../components/aboutus/yourDreams";



function Aboutus () {
  return (
    <div>
      <Header/>
      <AboutHero/>
      <Fitwell/>
      <YourDreams/>
      <SemiFooter/>
      <Footer/>
    </div>
  )
}

export default Aboutus;
