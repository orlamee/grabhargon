import ContentApply from "../components/apply/contentApply";
import Heading from "../components/apply/heading";
import Footer from "../components/footer";
import Header from "../components/navbar";
import SemiFooter from "../components/personalPage/semiFooter";

function SingleApplication() {
  return (
    <div>
      <Header />
      <Heading />
      <ContentApply />
      <SemiFooter />
      <Footer />
    </div>
  );
}

export default SingleApplication;
