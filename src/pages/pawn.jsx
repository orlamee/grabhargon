import EduHeader from "../components/educationalLoan/eduHeader";
import Footer from "../components/footer";
import FairSecure from "../components/pawn/fairSecure";
import PawnHero from "../components/pawn/pawnHero";
import SemiFooter from "../components/personalPage/semiFooter";



function Pawn () {
  return (
    <div>
      <EduHeader/>
      <PawnHero/>
      <FairSecure/>
      <SemiFooter/>
      <Footer/>
    </div>
  )
}

export default Pawn;
