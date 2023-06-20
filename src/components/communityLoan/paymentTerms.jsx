import lower from "../../assets/lowerint.png";
import single from "../../assets/single-source.svg";
import ssr from "../../assets/ssr.png";



export default function PaymentTerms () {
  return (
    <section className='paymentterms pb-0'>
      <div className='container'>
        <div className="row">
          <div className="col-sm-5 mb-3" style={{marginTop: "100px"}}>
            <h2>Payment terms</h2>
            <p className="mt-4">In our bid to help local businesses, we offer lower interest for business communities and flexible and simplified payment terms</p>
          </div>
          <div className="col-sm-7">
            <img src={lower} alt="business cluster" className="img-fluid w-100" />
          </div>
        </div>
        <div className="source-card">
          <div className="row justify-content-center">
            <div className="col-sm-6 text-center">
              <img src={single} alt="single source repayment" className="img-fluid" />
              <p className="my-5 text-white">Enjoy the security of a single-source repayment structure where every business in the<br/>community helps each other meet their repayment terms</p>
              <img src={ssr} alt="single source repayment" className="img-fluid w-100" />
            </div>
          </div>
        </div>
      </div>
    </section>
    
  )
}
