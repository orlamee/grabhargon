
import CareerHero from "../components/career/careerHero";
import Demand from "../components/career/demand";
import OurCulture from "../components/career/ourCulture";
import OurStaffs from "../components/career/ourStaffs";
import OurValues from "../components/career/ourValues";
import TheProcess from "../components/career/theProcess";
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
      <OurStaffs/>
      <Demand/>
      <TheProcess/>
      <SemiFooter/>
      <Footer/>
    </div>
  )
}

export default Careers;
