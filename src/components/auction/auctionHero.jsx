import bid from "../../assets/bid.png";


export default function AuctionHero () {
  return (
    <section className='auction-h pb-0'>
      <div className='container'>
        <div className="row justify-content-center">
          <div className="col-sm-7 text-center">
            <h2 className="mb-5 text-white">Bid, <span style={{color: "#FFBD00"}}>Win</span>, and Collect</h2>
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-sm-12 text-center">
            <img src={bid} alt="bid, win and collect" className="img-fluid w-100" />
          </div>
        </div>
        <div className="row justify-content-center ah-p">
          <div className="col-sm-4 text-center">
            <p className="text-white">Join the frenzy and discover the thrills of winning extraordinary deals. Our auctioning platform connects you with unique items, giving you an experience you will not forget anytime soon.</p>
          </div>
        </div>
      </div>
    </section>
    
  )
}
