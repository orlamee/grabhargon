import bills from "../../assets/billconcierge.png";



export default function BillConcierge () {
  return (
    <section className='bill-con'>
      <div className='container'>
        <div className="row justify-content-between">
          <div className="col-sm-5 mb-3 mt-9">
            <h2 className="mb-5">Your very own Bill Concierge</h2>
            <h6 className="w-75">On Hargon's bill payment platform, you can manage, and automate all your bills in one place. Get started by creating a personalized profile, and you never have to miss a bill payment again.</h6>
          </div>
          <div className="col-sm-6">
            <img src={bills} alt="bill payment" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
    
  )
}
