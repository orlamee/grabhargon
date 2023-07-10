import auction from "../../assets/tastic.png";
import deals from "../../assets/deals.svg";


export default function BidTastic () {
  return (
    <section className='auction-f bidtastic'>
      <div className='container'>
        <div className="row justify-content-between">
          <div className="col-sm-5">
            <img src={auction} alt="auction fever" className="img-fluid w-100" />
          </div>
          <div className="col-sm-6 mt-4">
            <h2 className="mb-5"><span style={{color: "#23A323"}}>Bid-tastic </span>Deals</h2>
            <p className="w-75">Unbelievable deals up for grabs through bidding wars.</p>
            <p className="w-75">Join our vibrant auction community and enjoy unlimited opportunities for remarkable bargains. Our auction house is where deals come to life, allowing you to snag an item or two.</p>
            <img src={deals} alt="auction fever" className="img-fluid mt-4" style={{marginLeft: "-90px"}} />
          </div>
        </div>
      </div>
    </section>
    
  )
}
