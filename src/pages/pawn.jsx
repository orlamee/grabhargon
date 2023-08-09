import EduHeader from "../components/educationalLoan/eduHeader";
import Footer from "../components/footer";
import FairSecure from "../components/pawn/fairSecure";
// import Pawns from "../components/pawn/pawn";
import PawnCredit from "../components/pawn/pawnCredit";
import PawnHero from "../components/pawn/pawnHero";
import PawnYour from "../components/pawn/pawnYour";
import SemiFooter from "../components/personalPage/semiFooter";
import { Description, Title } from "react-head-meta";



function Pawn () {
  return (
    <div>
       <div>
        <Title title="   Instant cash through pawn  " />
        <Description
          description="
          Unlock more cash with your assets at Hargon's pawn shop. Get instant cash with less bureaucracy when you use our Pawn services.
 "
        />
      </div>
      <EduHeader/>
      <PawnHero/>
      <FairSecure/>
      <PawnCredit/>
      <PawnYour/>
      {/* <Pawns/> */}
      <SemiFooter/>
      <Footer/>
    </div>
  )
}

export default Pawn;
