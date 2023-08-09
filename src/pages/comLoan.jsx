import Benefits from "../components/communityLoan/benefits";
import BuildingBridges from "../components/communityLoan/buildingBridges";
import BusinessCluster from "../components/communityLoan/businessCluster";
import CommunityHero from "../components/communityLoan/communityHero";
import PaymentTerms from "../components/communityLoan/paymentTerms";
import SingleSource from "../components/communityLoan/singleSource";
import EduHeader from "../components/educationalLoan/eduHeader";
import Footer from "../components/footer";
import SemiFooter from "../components/personalPage/semiFooter";
import { Description, Title } from "react-head-meta";




function ComLoan () {
  return (
    <div>
      <div>
        <Title title="   Friendly credit for your cliq  " />
        <Description
          description="
          Get financial empowerment for you and your friends through our community loans of up to N5,000,000. Partner with Hargon and share the collective dream.
 "
        />
      </div>
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
