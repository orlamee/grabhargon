import pay from "../../assets/paymentopt.png";



export default function PayOpt () {
  return (
    <section className='opt-payment'>
      <div className='container'>
        <div className="row">
          <div className="col-sm-6 mb-3 mt-9">
            <h2>Not just another <span style={{color: "#23A323"}}>payment<br/>Option</span></h2>
            <p className="mt-5 w-75">We are far from just another payment option. We are the modern solution to managing your money effectively.</p>
          </div>
          <div className="col-sm-6 mb-3">
            <img src={pay} alt="payment option" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
    
  )
}
