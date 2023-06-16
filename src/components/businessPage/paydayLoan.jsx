
import loans from "../../assets/loans.svg";
import happy from "../../assets/happy.svg";



export default function PaydayLoan () {
  return (
    <section className='paydayloan'>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-6 text-center">
            <img src={loans} alt="loans" className="img-fluid" />
            <img src={happy} alt="Happy employees" className="img-fluid mt-5" />
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-sm-5 text-center">
            <p>Keep your employees motivated and get the best out of them by ensuring they are paid on time through our payday loans. It helps your business ensure employee satisfaction and happiness.</p>
          </div>
        </div>
      </div>
    </section>
    
  )
}
