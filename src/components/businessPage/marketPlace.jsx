
import market from "../../assets/mrk.svg";
import icon from "../../assets/icons.svg";
import expand from "../../assets/expand.svg";
import sell from "../../assets/sell.svg";



export default function MarketPlace () {
  return (
    <section className='marketplace'>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-sm-6">
            <img src={market} alt="market" className="img-fluid" />
          </div>
          <div className="col-sm-5 mt-5">
            <img src={icon} alt="Expanding your business reach" className="img-fluid" />
            <h6 className="text-white my-4">Hargon’s Marketplace</h6>
            <img src={expand} alt="Expanding your business reach" className="img-fluid mb-4" />
            <p className="text-white w-75">Reach and serve more customers by selling your product on Hargon’s marketplace, where customers shop every day using our credit, and you get paid in full immediately.</p>
            <img src={sell} alt="Expanding your business reach" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  )
}
