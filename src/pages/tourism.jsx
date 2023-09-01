import EduHeader from "../components/educationalLoan/eduHeader";
import Footer from "../components/footer";
import SemiFooter from "../components/personalPage/semiFooter";
import Unleash from "../components/tourismB/unleash";
import Planfor from "../components/tourismB/planfor";
import Creditfor from "../components/tourismB/creditfor";
import TicketRefund from "../components/tourism/ticketRefund";
import Discovering from "../components/tourismB/discovering";
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
      <Unleash/>
      <Discovering/>
      <Planfor/>
      <TicketRefund/>
      <Creditfor/>
      <SemiFooter/>
      <Footer/>
    </div>
  )
}

export default Tourism;
