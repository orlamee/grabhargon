
import hc from "../assets/happy-customers.svg";
import stars from "../assets/stars.svg";
import loangranted from "../assets/loangranted.svg";
import author from "../assets/samuel.svg";
import quote from "../assets/quotee.svg";
import discover from "../assets/diiscover.svg";


export default function Testimony() {
  return (
    <section className="testimony">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-6 text-center">
            <h2>What Our <span style={{color: "#23A323"}}>Users Say</span></h2>
            <h5 className="mt-3">Here is what our users are saying about their experience on Hargon</h5>
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-sm-3 mb-3">
            <div className="testimony-tag">
              <div className="d-flex flex-row justify-content-center">
                <div><img src={hc} alt="happy customer" className="img-fluid"/></div>
                <div className="mx-4 mt-2"><h6>Happy Customers</h6></div>
                <div><img src={stars} alt="happy customer" className="img-fluid"/></div>
              </div>
            </div>
          </div>
          <div className="col-sm-3 mb-3">
            <div className="testimony-tag">
              <div className="d-flex flex-row justify-content-center">
                <div><img src={loangranted} alt="happy customer" className="img-fluid"/></div>
                <div className="mx-4 mt-2"><h6>Loan Granted</h6></div>
                <div><span className="tag-rate">+5.20%</span></div>
              </div>
            </div>
          </div>
          <div className="col-sm-3 mb-3">
            <div className="testimony-tag justify-content-center">
              <div className="d-flex flex-row">
                <div><img src={discover} alt="happy customer" className="img-fluid"/></div>
                <div className="ms-3 mt-2"><h6>Hear from Our Satisfied Customers</h6></div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-between" style={{marginTop: "140px"}}>
          <div className="col-sm-4 mb-3">
            <div className="testimony-card text-center">
              <img src={author} alt="author" className="img-fluid testimony-img" />
              <div><img src={quote} alt="quote" className="img-fluid" /></div>
              <h5 className="my-5">“Hargon has helped me expand my restaurant business through quick and low interests loans”</h5>
              <div className="autho">
                <h5>Sam</h5>
                <p>Chef</p>
              </div>
            </div>
          </div>
          <div className="col-sm-4 mb-3">
            <div className="testimony-card text-center">
              <img src={author} alt="author" className="img-fluid testimony-img" />
              <div><img src={quote} alt="quote" className="img-fluid" /></div>
              <h5 className="my-5">“I was able to launch my business with Hargon. It gave me the capital needed to woo my first client.”</h5>
              <div className="autho">
                <h5 style={{color: "#FFBD00"}}>Ken Attah</h5>
                <p>Chef</p>
              </div>
            </div>
          </div>
          <div className="col-sm-4 mb-3">
            <div className="testimony-card text-center">
              <img src={author} alt="author" className="img-fluid testimony-img" />
              <div><img src={quote} alt="quote" className="img-fluid" /></div>
              <h5 className="my-5">“Selling on Hargon has been great for I and my business. I have more reach and more capable customers”</h5>
              <div className="autho">
                <h5 style={{color: "#F37A00"}}>Sarah Thompson</h5>
                <p>Chef</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

