import EduHeader from "../components/educationalLoan/eduHeader";
import Footer from "../components/footer";
import SemiFooter from "../components/personalPage/semiFooter";
import DreamVac from "../components/tourism/dreamVac";
import TicketRefund from "../components/tourism/ticketRefund";
import TourHero from "../components/tourism/tourHero";
import TourLoan from "../components/tourism/tourismLoan";
import Travel from "../components/tourism/travel";
import { Description, Title } from "react-head-meta";




function Tourism () {
  return (
    <div>
       <div>
        <Title title="   Experience the world on credit  " />
        <Description
          description="
          Discover the world and make your travel experience worthwhile. From flight tickets to hotels, and cabs, Hargon has got you covered.
 "
        />
      </div>
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
