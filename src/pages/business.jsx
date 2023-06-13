import BannerBusiness from "../components/businessPage/bannerBusiness";
import BusinessCredit from "../components/businessPage/businessCredit";
import Footer from "../components/footer";
import Header from "../components/navbar";




function Business () {
  return (
    <div>
      <Header/>
      <BannerBusiness/>
      <BusinessCredit/>
      <Footer/>
    </div>
  )
}

export default Business;
