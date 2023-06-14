import money from "../../assets/money.svg";
import phone from "../../assets/pphone.svg";



export default function Pocket () {
  return (
    <section className='pocket'>
      <div className="container">
        <div className="row">
          <div className="col-sm-4 mb-3">
            <h2 className="mb-4">Pocket</h2>
            <p>Change in your pocket, swag in your steps</p>
          </div>
          <div className="col-sm-4 mb-3">
            <img src={phone} alt="money" className="img-fluid" />
          </div>
          <div className="col-sm-4 mb-3">
            <img src={money} alt="money" className="img-fluid mb-4" />
            <p>Having trouble keeping the lights on? We know how distracting that can be, so take advantage of our credit platform and apply for small loans to keep you till the next payday or allowance from home.</p>
          </div>
        </div>
      </div>
    </section>
    
  )
}
