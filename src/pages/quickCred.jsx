import EduHeader from "../components/educationalLoan/eduHeader";
import Footer from "../components/footer";
import SemiFooter from "../components/personalPage/semiFooter";
import EasyApplication from "../components/quickCredit/easyApplication";
import InstantCredit from "../components/quickCredit/instantCredit";
import Payback from "../components/quickCredit/payback";
import QCHero from "../components/quickCredit/qcHero";
import Three from "../components/quickCredit/three";
import WhyQuick from "../components/quickCredit/whyQuick";
import { Description, Title } from "react-head-meta";



function QuickCredit () {
  return (
    <div>
       <div>
        <Title title="  Instant access to credit " />
        <Description
          description="
          Get Instant relief of up to N1,000,000 for emergency or unwanted situations. Our quick credit applies to salary and non-salary earners.
 "
        />
      </div>
      <EduHeader/>
      <QCHero/>
      <InstantCredit/>
      <Payback/>
      <WhyQuick/>
      <Three/>
      <EasyApplication/>
      <SemiFooter/>
      <Footer/>
    </div>
  )
}

export default QuickCredit;
