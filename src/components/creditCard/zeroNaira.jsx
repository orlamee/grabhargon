import zero from "../../assets/zeronaira.png";




export default function ZeroNaira () {
  return (
    <section className='zero pb-0'>
      <div className='container'>
        <div className="row">
          <div className="col-sm-5 mb-3 mt-5">
            <h2>Go beyond <span style={{color: "#F97316"}}>Zero naira</span></h2>
            <p className="mt-5 text-black">Never run out of funds for your business. Our business credit card offers an overdraft option, allowing you to withdraw any amount, even when your account balance dips below $0</p>
          </div>
          <div className="col-sm-7">
            <img src={zero} alt="zero naira" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
    
  )
}
