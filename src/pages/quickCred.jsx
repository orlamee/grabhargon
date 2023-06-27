import EduHeader from "../components/educationalLoan/eduHeader";
import Footer from "../components/footer";
import SemiFooter from "../components/personalPage/semiFooter";
import InstantCredit from "../components/quickCredit/instantCredit";
import Payback from "../components/quickCredit/payback";
import QCHero from "../components/quickCredit/qcHero";
import Three from "../components/quickCredit/three";
import WhyQuick from "../components/quickCredit/whyQuick";



function QuickCredit () {
  return (
    <div>
      <EduHeader/>
      <QCHero/>
      <InstantCredit/>
      <Payback/>
      <WhyQuick/>
      <Three/>
      <SemiFooter/>
      <Footer/>
    </div>
  )
}

export default QuickCredit;
