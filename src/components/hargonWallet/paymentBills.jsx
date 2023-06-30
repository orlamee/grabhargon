import netflix from "../../assets/netflix.png";



export default function PaymentBills () {
  return (
    <section className='bills-payment pb-0'>
      <div className='container'>
        <div className="row justify-content-center">
          <div className="col-sm-5 text-center">
            <h2>Bills <span style={{color: "#23A323"}}>Payment</span></h2>
            <p className="mt-5">Seamlessly pay your bills on the Hargon bill platform using funds from your wallet.</p>
          </div>
        </div>
        <div className="row justify-content-center mt-9">
          <div className="col-sm-10 text-center">
            <img src={netflix} alt="netflix" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
    
  )
}
