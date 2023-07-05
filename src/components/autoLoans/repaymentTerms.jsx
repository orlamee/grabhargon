import repay from "../../assets/paysmall.png";


export default function RepaymentTerm () {
  return (
    <section className='r-term'>
      <div className='container'>
        <div className="row">
          <div className="col-sm-7 mb-3 mt-9">
            <h2><span style={{color: "#23A323"}}>Flexible</span><br/><span style={{color: "#FFBD00" , fontWeight: "700"}}>Convenient</span><br/>Repayment terms</h2>
            <p className="mt-5 w-50">With Hargon, you can take the bold step towards ensuring convenient auto-financing loans with up to 48 months of repayment terms.</p>
          </div>
          <div className="col-sm-5">
            <img src={repay} alt="auto loans" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
    
  )
}
