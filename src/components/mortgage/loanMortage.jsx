
import finance from "../../assets/hargonmortgage.svg";
import repay from "../../assets/midd.png";


export default function LoanMortgage () {
  return (
    <section className='l-mortgage'>
      <div className='container'>
        <div className="row justify-content-center">
          <div className="col-sm-6 text-center">
            <img src={finance} alt="Why  Hargon's Mortgage Loan Works for You" className="img-fluid w-100" />
          </div>
        </div>
        <div className="row justify-content-center mt-3">
          <div className="col-sm-12">
            <img src={repay} alt="Why  Hargon's Mortgage Loan Works for You" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </section>
    
  )
}
