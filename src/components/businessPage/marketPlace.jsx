
import market from "../../assets/mrk.png";
import icon from "../../assets/icons.svg";
import expand from "../../assets/expand.svg";
import sell from "../../assets/sell.svg";



export default function MarketPlace () {
  return (
    <section className='marketplace'>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-sm-5">
            <img src={icon} alt="Expanding your business reach" className="img-fluid" />
            <h6 className="my-4" style={{color: "#228B22"}}>Hargon’s Marketplace</h6>
            <img src={expand} alt="Expanding your business reach" className="img-fluid mb-4" />
            <p className="text-black w-75">Reach and serve more customers by selling your product on Hargon’s marketplace, where customers shop every day using our credit, and you get paid in full immediately.</p>
            <img src={sell} alt="Expanding your business reach" className="img-fluid sellq mt-9" />
          </div>
          <div className="col-sm-7 mt-4">
            <img src={market} alt="market" className="img-fluid w-100" />
          </div>
        </div>

      </div>
    </section>
  )
}
