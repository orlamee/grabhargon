import BuildingBridges from "../components/communityLoan/buildingBridges";
import BusinessCluster from "../components/communityLoan/businessCluster";
import CommunityHero from "../components/communityLoan/communityHero";
import PaymentTerms from "../components/communityLoan/paymentTerms";
import Footer from "../components/footer";
import PersonalHeader from "../components/personalNavbar";
import SemiFooter from "../components/personalPage/semiFooter";




function ComLoan () {
  return (
    <div>
      <PersonalHeader/>
      <CommunityHero/>
      <BuildingBridges/>
      <BusinessCluster/>
      <PaymentTerms/>
      <SemiFooter/>
      <Footer/>
    </div>
  )
}

export default ComLoan;
