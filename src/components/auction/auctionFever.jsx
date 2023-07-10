import auction from "../../assets/auctionf.png";


export default function AuctionFever () {
  return (
    <section className='auction-f'>
      <div className='container'>
        <div className="row justify-content-between">
          <div className="col-sm-5 mb-3 mt-5">
            <h2 className="mb-5"><span style={{color: "#23A323"}}>Auction</span> Fever</h2>
            <p className="w-75">Catch the fever and get addicted to the thrill of bidding; the ultimate shopping experience.Experience the excitement of buying from wide-ranging items, from cars to houses, arts, and other collectables. We can guarantee we have something for you.</p>
          </div>
          <div className="col-sm-6">
            <img src={auction} alt="auction fever" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
    
  )
}
