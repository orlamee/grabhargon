import EduHeader from "../components/educationalLoan/eduHeader";
import Footer from "../components/footer";
import SemiFooter from "../components/personalPage/semiFooter";
import DreamVac from "../components/tourism/dreamVac";
import TicketRefund from "../components/tourism/ticketRefund";
import TourHero from "../components/tourism/tourHero";
import TourLoan from "../components/tourism/tourismLoan";
import Travel from "../components/tourism/travel";




function Tourism () {
  return (
    <div>
      <EduHeader/>
      <TourHero/>
      <TourLoan/>
      <DreamVac/>
      <Travel/>
      <TicketRefund/>
      <SemiFooter/>
      <Footer/>
    </div>
  )
}

export default Tourism;
