import cash from "../../assets/cashflow.png";


export default function SayGood () {
  return (
    <section className='good'>
      <div className='container'>
        <div className="row justify-content-between">
          <div className="col-sm-5 mb-3">
            <h2>Say Goodbye to <span style={{color: "#23A323"}}>Cashflow Constraints</span></h2>
            <p className="mt-5 w-75">With Hargon's LPO financing solution, your business enjoys uninterrupted cash flow, allowing it to fulfil purchase orders, meet clients' demands, and seize new growth opportunities within its industry.</p>
          </div>
          <div className="col-sm-7">
            <img src={cash} alt="cash-flow" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
    
  )
}
