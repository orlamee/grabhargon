
import CareerHero from "../components/career/careerHero";
import OurCulture from "../components/career/ourCulture";
import OurValues from "../components/career/ourValues";
import Vacancies from "../components/career/vacancies";
import Footer from "../components/footer";
import Header from "../components/navbar";
import SemiFooter from "../components/personalPage/semiFooter";





function Careers () {
  return (
    <div>
      <Header/>
      <CareerHero/>
      <Vacancies/>
      <OurCulture/>
      <OurValues/>
      <SemiFooter/>
      <Footer/>
    </div>
  )
}

export default Careers;
