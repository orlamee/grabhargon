import SemiFooter from "../components/personalPage/semiFooter";
import Footer from "../components/footer";
import Header from "../components/navbar";
import FairSecure from "../components/auction/fairSecure";
import AuctionHero from "../components/auction/auctionHero";
import AuctionFever from "../components/auction/auctionFever";
import BidTastic from "../components/auction/bidtastic";
import Zero from "../components/auction/zeroNegotiation";




function Auction () {
  return (
    <div>
      <Header/>
      <AuctionHero/>
      <AuctionFever/>
      <BidTastic/>
      <Zero/>
      <FairSecure/>
      <SemiFooter/>
      <Footer/>
    </div>
  )
}

export default Auction;
