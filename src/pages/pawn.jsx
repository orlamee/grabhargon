import EduHeader from "../components/educationalLoan/eduHeader";
import Footer from "../components/footer";
import FairSecure from "../components/pawn/fairSecure";
// import Pawns from "../components/pawn/pawn";
import PawnCredit from "../components/pawn/pawnCredit";
import PawnHero from "../components/pawn/pawnHero";
import PawnYour from "../components/pawn/pawnYour";
import SemiFooter from "../components/personalPage/semiFooter";



function Pawn () {
  return (
    <div>
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
