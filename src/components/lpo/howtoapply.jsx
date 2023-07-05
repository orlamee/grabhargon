import cash from "../../assets/po.png";
import order from "../../assets/apply.svg";


export default function HowToApply () {
  return (
    <section className='good hta'>
      <div className='container'>
        <div className="row">
          <div className="col-sm-5">
            <h2>How to <span style={{color: "#23A323"}}>Apply</span></h2>
            <p className="mt-5">Applying for LPO financing on Hargon is straightforward. Here is our four-step process for getting the financing you need for your LPOs</p>
          </div>
        </div>
        <div className="row justify-content-between mt-5">
          <div className="col-sm-5 mb-3 mt-5">
            <img src={cash} alt="purchase order" className="img-fluid w-100" />
          </div>
          <div className="col-sm-6 mb-3">
            <img src={order} alt="purchase order" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
    
  )
}
