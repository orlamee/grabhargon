import Benefits from "../components/communityLoan/benefits";
import BuildingBridges from "../components/communityLoan/buildingBridges";
import BusinessCluster from "../components/communityLoan/businessCluster";
import CommunityHero from "../components/communityLoan/communityHero";
import PaymentTerms from "../components/communityLoan/paymentTerms";
import SingleSource from "../components/communityLoan/singleSource";
import EduHeader from "../components/educationalLoan/eduHeader";
import Footer from "../components/footer";
import SemiFooter from "../components/personalPage/semiFooter";




function ComLoan () {
  return (
    <div>
      <EduHeader/>
      <CommunityHero/>
      <BuildingBridges/>
      <BusinessCluster/>
      <PaymentTerms/>
      <SingleSource/>
      <Benefits/>
      <SemiFooter/>
      <Footer/>
    </div>
  )
}

export default ComLoan;
