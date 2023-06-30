import bills from "../../assets/payment.png";



export default function BillPayment () {
  return (
    <section className='digi'>
      <div className='container'>
        <div className="row justify-content-between">
          <div className="col-sm-5 mb-3 mt-5">
            <h2 className="mb-5 text-white">Never miss a bill payment<br/>again</h2>
            <h6 className="text-white w-87" style={{fontSize: "14px", lineHeight: "20px"}}>With Hargon, you can say goodbye to missed bill payments. Enjoy settling all your bills on time and seamlessly using our automated bill payments system, including auto-debits from Hargon wallets and other credit options.</h6>
          </div>
          <div className="col-sm-6">
            <img src={bills} alt="bill payment" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
    
  )
}
